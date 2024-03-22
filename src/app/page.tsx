import React from "react";
import Link from "next/link";
import { Block } from "@/model/Block";
import { decrypt_ctr, encrypt_ctr } from "@/lib/cryptonight";

export default function Home() {
  let input: string = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
  let key: string = "YELLOW SUBMARINE";
  let iv: string = "YELLOW SUBMARINE";
  
  const encrypted = encrypt_ctr(input, key, iv);
  console.log(encrypted);
  console.log(decrypt_ctr(encrypted, key, iv)); // Expected: "HELLO, WORLD!" (Mungkin ada padding)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
        Design and Implementation Results of the 'new' Block cipher
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-indigo-800 before:opacity-45 after:from-sky-900 after:via-[#0141ff] after:opacity-25 before:lg:h-[360px] z-[-1]">
        <h2 className="relative text-white font-bold text-7xl">Cryptonight.</h2>
      </div>

      <div className="mb-32 flex items-center justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/text" className="group rounded-lg border border-transparent px-5 py-4 hover:border-zinc-700 hover:bg-zinc-800/30 mr-3">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Text Input{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Got a message on your mind? Type it directly for secure encryption!
          </p>
        </Link>

        <Link href="/file" className="group rounded-lg border border-transparent px-5 py-4 hover:border-zinc-700 hover:bg-zinc-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Binary File Input{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Need to encrypt a larger secret? Upload your binary file here!
          </p>
        </Link>
      </div>
    </main>
  );
}
