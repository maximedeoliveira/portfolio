import type { NextPage } from 'next';
import Button from '@/components/Button';
import Github from '@/icons/Github';
import Linkedin from '@/icons/Linkedin';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Maxime De Oliveira</title>
                <meta name="description" content="👋 Hey I'm Maxime" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center h-full space-y-6">
                <h1 className="space-x-4 font-extrabold text-center text-7xl">
                    <span className="inline-block animate-wave">👋</span>
                    <span className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                        Hey I&apos;m Maxime, <br />a FullStack Developer
                    </span>
                </h1>
                <div className="flex space-x-4">
                    <Button>
                        <a
                            href="https://github.com/maximedeoliveira"
                            className="flex flex-row space-x-2"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="w-6 h-6 text-gray-900 stroke-current dark:text-white" />
                            <p>Github</p>
                        </a>
                    </Button>
                    <Button>
                        <a
                            href="https://www.linkedin.com/in/maximedeoliveira"
                            className="flex flex-row space-x-2"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin className="w-6 h-6 text-gray-900 stroke-current dark:text-white" />
                            <p>Linkedin</p>
                        </a>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Home;
