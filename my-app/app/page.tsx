import Image from "next/image";

export default function Home() {
  return (
    <html lang="en">
        <head>
        </head>

        <body class="antialiased overflow-x-hidden">
          {/*ヘッダー*/}
          <div className="flex">    
            <h1 class="text-ui-secondary font-bold sm:block">TailwindTamplates</h1>
            <h1>Templates</h1>
            <h1>Resources</h1>
            <h1>Blog</h1>
            <h1>About</h1>
          </div>
          {/*メイン*/}
          <div>
            <h1>Update</h1>
            <h1 class="text-3xl md:text-5xl text-ui-secoundry font-semibold">TailwindTemplates v2 is here</h1>
            <h1>1 min read</h1>
            <h1>TailwindTemplates V2 is finally here! Our focus for TailwindTemplates v2 is to bring open-source design systems to Tailwindcss. Each design system has a detailed guideline to provide consistency and coherence within a user interface.</h1>
            <h1>What to expect?</h1>
            <h1>Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system. </h1>
            <h1>Not only templates</h1>
            <h1>We are planning to bring more tailwind and web development-related content such as videos, blog posts, tutorials and news. </h1>

          </div>
          {/*フッダー*/}
          <div>
            huder
          </div>
        </body>


    </html>

  );
}
