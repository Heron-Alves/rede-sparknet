import React from 'react';

function AuthPage({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-[url('https://i0.wp.com/hospitalsantamonica.com.br/wp-content/uploads/2020/11/redes-sociais-saude-mental.png?resize=1536%2C1075&ssl=1')] bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-center">
            <form className="flex flex-col bg-white px-6 py-14 rounded-2xl gap-11 text-gray-600 w-1/4">
                {children}
            </form>
        </main>
    );
}

export default AuthPage;
