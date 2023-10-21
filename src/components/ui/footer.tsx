export const Footer = () => (
  <footer slot="footer">
    <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8 text-sm md:text-lg xl:text-xl">
      <div className="flex gap-4">
        <div className="grid grid-cols-3 gap-8 md:gap-20 ">
          <div>
            <h1 className="mb-6  font-semibold text-white uppercase dark:text-white">
              Contact
            </h1>
            <ul className="text-gray-400  font-medium">
              <li>
                <div>
                  <h3 className="text-neutral-300 pb-2">Location</h3>
                  <a href="/">
                    <p> Strike Force & Fitness</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-white uppercase ">Hours</h2>
            <ul className="text-gray-400  font-medium">
              <div>
                <h3 className="text-neutral-300 pb-2 ">Mon-Fri</h3>

                <p>
                  {" "}
                  7am-8pm <br />
                </p>
              </div>
              <div className="mt-2">
                <h3 className="text-neutral-300 pb-2 ">Saturday</h3>
                <p>
                  {" "}
                  12-2pm <br />
                </p>
              </div>
            </ul>
          </div>
          <div>
            <h2 className="mb-6  font-semibold text-white uppercase ">
              Explore More
            </h2>
            <ul className="text-gray-400  font-medium">
              <li className="mb-1">
                <a href="#" className=" underline ">
                  Mastersky
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Matador Muay Thai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-400 sm:text-center ">
          © 2023{" "}
          <a href="" className="hover:underline">
            V3nti™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61550647615965"
            className="text-gray-400 hover:text-white dark:hover:text-white"
          >
            <svg
              className="w-5 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill="#fefefe"
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.instagram.com/strik3zone_fitness/"
            className="text-gray-400 hover:text-white dark:hover:text-white"
          >
            <svg
              className="w-5 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path
                fill="#fefefe"
                fill-rule="evenodd"
                d="M11.996 4.621c2.404 0 2.686.011 3.636.054.879.04 1.354.186 1.672.31.421.165.721.358 1.035.672.315.314.511.614.672 1.036.121.318.271.793.31 1.671.043.95.054 1.232.054 3.636s-.01 2.686-.054 3.636c-.039.878-.185 1.353-.31 1.671a2.792 2.792 0 01-.672 1.036 2.75 2.75 0 01-1.035.671c-.318.122-.793.272-1.672.311-.95.043-1.232.054-3.636.054-2.403 0-2.685-.011-3.635-.054-.879-.04-1.354-.186-1.672-.31a2.793 2.793 0 01-1.035-.672 2.749 2.749 0 01-.672-1.036c-.121-.318-.271-.793-.31-1.671-.043-.95-.054-1.232-.054-3.636s.01-2.686.053-3.636c.04-.878.186-1.353.311-1.671.164-.422.357-.722.672-1.036.314-.314.614-.51 1.035-.671.318-.122.793-.272 1.672-.311.95-.046 1.232-.054 3.635-.054zm0-1.621c-2.442 0-2.75.01-3.71.054-.957.042-1.611.196-2.182.417a4.385 4.385 0 00-1.593 1.04c-.5.5-.807 1.003-1.04 1.593-.221.571-.375 1.225-.417 2.185C3.01 9.246 3 9.554 3 11.996c0 2.443.01 2.75.054 3.711.042.957.196 1.61.417 2.186.229.593.54 1.093 1.04 1.593s1.003.807 1.593 1.039c.571.221 1.225.375 2.185.418.961.043 1.265.053 3.711.053 2.446 0 2.75-.01 3.71-.053.958-.043 1.611-.197 2.186-.418a4.385 4.385 0 001.593-1.04c.5-.5.807-1.003 1.04-1.592.221-.572.375-1.225.417-2.186.043-.96.054-1.264.054-3.71 0-2.447-.01-2.75-.054-3.711-.042-.957-.196-1.611-.417-2.186a4.386 4.386 0 00-1.04-1.593c-.5-.5-1.003-.807-1.593-1.04-.571-.22-1.225-.374-2.185-.417-.965-.04-1.272-.05-3.715-.05zm0 4.375a4.622 4.622 0 000 9.243 4.625 4.625 0 004.622-4.622 4.624 4.624 0 00-4.622-4.621zm0 7.621a3 3 0 110-5.999 3 3 0 010 6zm5.883-7.803a1.079 1.079 0 11-2.158 0 1.079 1.079 0 012.158 0z"
              />
            </svg>
            <span className="sr-only">Instagram Page</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
