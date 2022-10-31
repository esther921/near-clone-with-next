import Image_fixer from "../components/image-fixer";
import Logo_fixer from "../components/logo-fixer";
import Link from "next/link";
import Bg from "../components/bg";

export default function Home() {
  return (
    <div className="container">
      {/* nav up to the Logo_fixer use */}
      <div className="text-secondary relative w-full">
        {/* nav */}
        <div className=" container flex justify-between p-4 bg-white fixed w-full">
          <div className="lg:flex">
            <picture className="flex gap-1 divide-x-2 divide-zinc-200 pt-1">
              <img
                src="/Images/rounded-black-logo.svg"
                className=" w-10 p-1"
                alt="logo"
              />

              <p className="pt-1 lg:hidden">
                <img className="pl-2 h-8" src="/Images/visual-logo.svg" />
              </p>
            </picture>
            <p className="hidden lg:inline lg:text-lg lg:font-bold lg:text-zinc-900">
              Dacade
            </p>
          </div>

          <div className="lg:flex lg:gap-20">
            <p className="hidden lg:inline">Start the Course</p>
            <button className="rounded-3xl text-lg bg-zinc-700 text-white pb-3 pt-2 px-6 lg:font-medium">
              Create wallet
            </button>
          </div>
        </div>

        <div className="lg:hidden">
        <Bg />
      </div>

        <div className="pt-20">
          <div className="pt-36 flex flex-col items-center w-full">
            <p className="text-4xl font-medium flex flex-col space-y-1 text-zinc-700 lg:text-7xl lg:flex-row lg:gap-4">
              <p className="flex gap-3 lg:gap-4">
                Get
                <span className="bg-clip-text text-transparent bg-gradient-to-t to-gradient-violet via-gradient-blue from-gradient-green">
                  NEAR <br />
                </span>
              </p>
              <p>Certified!</p>
            </p>

            <p className="text-center text-lg px-9 pt-8 lg:px-40 lg:text-2xl lg:font-normal lg:leading-tight">
              We, in NEAR Balkans, know how important it is to have regional and{" "}
              local support. Now you can become NEAR certified in a regional
              language of preference and connect with our team to support your
              further growth within the NEAR ecosystem.
            </p>
          </div>
          <picture>
            <img
              className="mx-auto mt-28 lg:mt-20"
              src="/Images/down-circled-arrow.svg"
            />
          </picture>
        </div>
        <div className="flex flex-col gap-8">
          <div className="mt-40 text-4xl flex flex-col items-center font-medium text-zinc-700 -space-y-2 lg:text-6xl lg:leading-tight">
            <span>Making your NEAR</span>
            <span>learning easy.</span>
          </div>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-0 lg:pt-28">
            <Image_fixer
              src="/Images/visual-big-blue-green.png"
              text="Open NEAR wallet"
            />
            <p className="flex flex-col items-center lg:items-start lg:pl-44 lg:pr-8 lg:order-first lg:pt-20 lg:text-lg">
              <span className=" hidden lg:inline text-4xl text-zinc-700 font-medium lg:pb-3 lg:">
                Open NEAR wallet
              </span>
              <p className="text-center mx-8 lg:ml-0 lg:text-start">
                Opening a NEAR wallet is the first step and essential part of
                joining the NEAR community as well as starting this course
              </p>

              <Link className="flex w-full justify-center lg:justify-start lg:mt-8" href="">
                <button className="rounded-3xl mt-7 border border-zinc-900 py-2 px-8 mb-12 lg:text-zinc-900 lg:mt-0">
                  Create wallet
                </button>
              </Link>
            </p>
          </div>
        </div>

        <div className="space-y-8 pb-16">
          <Image_fixer src="/Images/archary.svg" text="Complete the course" />
          <div className="flex flex-col items-center gap-6">
            <p>In three simple modules, learn:</p>
            <p>
              <Logo_fixer
                src="/Images/red-nested-squares.png"
                text="Essential NEAR concepts"
              />
            </p>
            <p>
              <Logo_fixer
                src="/Images/green-rounded-rhombus.png"
                text="How to write smart contracts on NEAR"
              />
            </p>
            <p>
              <Logo_fixer
                src="/Images/blue-smiley.png"
                text="How to build dapps on NEAR blockchain"
              />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-2xl text-zinc-900 font-medium">
            Claim NEAR certificate
          </p>
          <p className="flex flex-col items-center">
            <span>Upon course completion, receive the NEAR</span>
            <span>dev 101 certificate as an NFT on your NEAR</span>
            <span>wallet.</span>
          </p>
        </div>
      </div>
      {/* certificate of completion*/}
      <div className="flex flex-col items-center pt-8 pb-44">
        <img src="/Images/certificate-of-completion.png" className="w-82" />
      </div>
      {/* last Image_fixer used and button*/}
      <div className="space-y-6">
        <Image_fixer
          src="/Images/big-black-visual.png"
          text="NEAR Develpment 101"
        />
        <div className="flex flex-col items-center">
          <button className="rounded-3xl border border-gray-300 py-2 px-6 mb-12">
            Start the course
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center pt-8 text-lg">
        <span>
          Visit{" "}
          <Link href="">
            <strong>nearbalkans.org</strong>
          </Link>{" "}
          and make sure to{" "}
        </span>

        <span>follow us on our social and community</span>
        <span>channels!</span>
      </div>

      {/* logo_links and footer */}

      <div className="flex flex-col items-center pt-28 space-y-8 text-secondary pb-12 w-full">
        <div className="w-full flex justify-between px-8">
          <Link href="">
            <img src="/Images/twitter.svg" />
          </Link>

          <Link href="">
            <img src="/Images/discord.svg" />
          </Link>
          <Link href="">
            <img src="/Images/telegram.svg" />
          </Link>
          <Link href="">
            <img src="/Images/facebook.svg" />
          </Link>
          <Link href="">
            <img src="/Images/linkedin.svg" />
          </Link>
          <Link href="">
            <img src="/Images/instagram.svg" />
          </Link>
          <Link href="">
            <img src="/Images/unknown-link.svg" />
          </Link>
        </div>
        <div className="text-lg flex flex-col items-center">
          <Link href="">NEAR Balkans 2022</Link>
          <Link href="">info@nearbalkans.org</Link>
          <Link href="">Privacy policy</Link>
          <Link href="">Cookie Policy</Link>
          <Link href="">Terms & Conditions</Link>
        </div>
        <p className="flex flex-col items-center text-lg">
          <span>NEAR Balkans Hub: Bosnia &</span>
          <span>Herzegovina, Bulgaria, Croatia,</span>
          <span>Montenegro, North Macedonia, Serbia,</span>
          <span>and Slovenia</span>
        </p>
      </div>
     
    </div>
  );
}
