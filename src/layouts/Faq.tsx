import logoIconYellow from "@assets/svg/logo-icon-yellow.svg";

export default function Faq() {
    return (
        <div className="pt- bg-[#F3F3F3]">
            {/* Slant */}
            <div className="w-screen h-0 border-l-[100vw] border-l-white border-b-[5vw] border-[#F3F3F3]" />
            <br />
            <br />
            <br />
            <h3 className="text-center text-4xl font-bold mb-16">
                Frequently asked questions
            </h3>

            <div className="grid grid-cols-4">
                <div className="col-span-1 border p-8 text-center font-semibold">
                    <h3>General</h3>
                </div>
                <div className="col-span-3 border p-8 text-center">
                    <p>I want to work part-time, is that possible</p>
                </div>
            </div>
            <div className="col-span-3 border p-8 text-center">
                <p>How long are the average projects?</p>
            </div>
            <div className="col-span-3 border p-8 text-center bg-[#E8E8E8] flex">
                <p className="flex-1 ml-8 font-semibold">
                    How does the payment works?
                </p>

                <img className="float-right w-6" src={logoIconYellow} alt="" />
            </div>
            <div className="col-span-3 border p-8 text-center">
                <p>How much can I earn?</p>
            </div>
            <div className="grid grid-cols-5">
                <div className="col-span-1 border p-8 text-center font-semibold bg-[#E8E8E8] ">
                    <h3>General</h3>
                </div>
                <div className="col-span-1 border p-8 text-center font-semibold">
                    <h3>Joining Process</h3>
                </div>
                <div className="col-span-3 border p-8 text-center">
                    <p>I want to work part-time, is that possible</p>
                </div>
            </div>
            <div className="col-span-3 border p-8 text-center">
                <p>How long are the average projects?</p>
            </div>
            <div className="col-span-3 border p-8 text-center">
                <p>How long are the average projects?</p>
            </div>
            <div className="col-span-3 border p-8 text-center">
                <p>How much can I earn?</p>
            </div>
            <br />
            <br />
            <br />
            {/* Slant */}
            <div className="w-screen h-0 border-l-[100vw] border-l-[#f3f3f3] border-b-[5vw] border-dark" />
        </div>
    );
}
