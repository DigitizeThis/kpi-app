import React from "react";

const Container = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <main className="flex flex-row flex-wrap px-6 my-8 mb-20 justify-center items-center py-5">
            <div className="container mx-auto min-h-screen">
                {children}
            </div>
        </main>
    );
};

export default Container;