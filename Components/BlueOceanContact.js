import Link from "next/link";
import React from "react";

const BlueOceanContact = () => {
  return (
    <footer className="tracking-wider">
      <section className="border-b">
        <div className="my-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 text-center">
              GET THE LATEST OFFERS AND UPDATES
            </h3>
          </div>
          <div>
            <div>
              <form action="" className="flex my-4">
                <input
                  className="p-1 w-full"
                  type="mail"
                  placeholder="ENTER MAIL ADDRESS"
                />
                <button class="mx-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center my-3 text-gray-700">
        <div>
          <div>
            <h3 className="text-2xl">OUR SERVICES</h3>
            <div className="flex flex-col my-3 tracking-">
              <Link href="/">
                <a>Air Freight</a>
              </Link>
              <Link href="/">
                <a>Ocean Freight</a>
              </Link>
              <Link href="/">
                <a>Customs</a>
              </Link>
              <Link href="/">
                <a>Transportation</a>
              </Link>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </footer>
  );
};

export default BlueOceanContact;
