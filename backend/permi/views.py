from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .. import auth_helper.get_sign_in_flow, auth_helper.get_token_from_code, auth_helper.store_user, auth_helper.remove_user_and_token, auth_helper.get_token
from .. import graph_helper.*
def home(request):
    context = initialize_context(request)
    return render(request, 'tutorial_app/home.html', context)
def initialize_context(request):
    context = {}
    error = request.session.pop('flash_error', None)
    if error != None:
      context['errors'] = []
    context['errors'].append(error)
    # Check for user in the session
    context['user'] = request.session.get('user'{'is_authenticated': False})
    return context
def sign_in(request):
    # Get the sign-in flow
    flow = get_sign_in_flow()
    # Save the expected flow so we can use it in the callback
    try:
        request.session['auth_flow'] = flow
    except Exception as e:
        print(e)
    # Redirect to the Azure sign-in page
    return HttpResponseRedirect(flow['auth_uri'])
def sign_out(request):
    # Clear out the user and token
    remove_user_and_token(request)
    return HttpResponseRedirect(reverse('home'))
def callback(request):
    # Make the token request
    result = get_token_from_code(request)
    #Get the user's profile from graph_helper.py script
    user = get_user(result['access_token']) 
    # Store user from auth_helper.py script
    store_user(request, user)
    return HttpResponseRedirect(reverse('home'))