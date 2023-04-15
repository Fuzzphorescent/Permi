import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={"landing-landing-wrapper"}>
      <div className={"landing-landing"}>
        <div className={"landing-overlap"}>
          <div className={"landing-background"} />
          <img className={"landing-sharon"} src={"sharon.png"} />
          <div className={"landing-gradient"} />
          <div className={"landing-get-started"}>
            <div className={"landing-overlap-group"}>
              <div className={"landing-text-wrapper"}>Get Started</div>
            </div>
          </div>
          <p className={"landing-p"}>
            With Permi, you can manage your requests, grant permission, and book halls inside your organisation—all in one place.
          </p>
          <div className={"landing-nav-bar"}>
            <div className={"landing-overlap-group1"}>
              <div className={"landing-div"}>Permi.</div>
              <button onClick={() => console.log("Clicked!")} className={"landing-sign-in"}>
                <div className={"landing-div-wrapper"}>
                  <div className={"landing-text-wrapper-2"}>Sign in</div>
                </div>
              </button>
            </div>
          </div>
          <h1 className={"landing-h-1"}>Say goodbye to playing tag with the authorities to get your form signed.</h1>
        </div>
      </div>
    </div>
  )
}
