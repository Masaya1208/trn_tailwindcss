import Image from "next/image";

export default function Home() {
  return (
    <html lang="en">
        <head>
        </head>

        <body className="antialiased overflow-x-hidden">
          {/*ヘッダー*/}
          <div className="container mx-auto px-6">
            <nav className="flex items-center justify-between py-8 px-4 sm:px-0">
              <a className="w-1/4 text-primary font-bold text-2xl flex items-center space-x-2">
                <h1 className="text-ui-secondary font-bold sm:block">TailwindTamplates</h1>
              </a>
              <div className="w-2/4 hidden lg:block">
                <ul className="grid grid-cols-4 gap-4 text-center text-ui-primary">
                  <h1 className="hover:opacity-75">Templates</h1>
                  <h1 className="hover:opacity-75">Resources</h1>
                  <h1 className="hover:opacity-75">Blog</h1>
                  <h1 className="hover:opacity-75">About</h1>
                </ul>
              </div>
            </nav>  
          </div>
          {/*メイン*/}
          <div className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto">
            <div>
              <div className="bg-blue-100 inline-block py-1 px-4 rounded-xl mb-6">
                <p className="text-blue-500 font-bold">
                  Update</p>
              </div>
              <h1 className="text-3xl md:text-5xl text-ui-secoundry font-semibold">TailwindTemplates v2 is here</h1>
            </div>

            <section className="mt-10 mb-32 blog">
              <div className="flex justfy-between items-center">
                <div className="flex item-center">
                  <p className="text-ui-secoudary">
                    1 min read</p>
                </div>
              </div>
              <div className="mt-8">
                  <div className="paragraph-block">
                    <p className="mb-6 leading-relaxed">
                    TailwindTemplates V2 is finally here! Our focus for TailwindTemplates v2 is to bring open-source design systems to Tailwindcss. Each design system has a detailed guideline to provide consistency and coherence within a user interface.</p>
                  </div>
                  <div className="header-brock">
                    <h3 className="mb-6 font-bold">
                    What to expect?</h3>
                  </div>
                  <div className="paragraph-block">
                  <p className="mb-6 leading-relaxed">
                    Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system. </p>
                  </div>
                  <div className="header-brock">
                    <h3 className="mb-6 font-bold">
                    Not only templates</h3>
                  </div>
                  <div className="paragraph-brock">
                    <p className="mb-6 leagind-relaxed">
                    We are planning to bring more tailwind and web development-related content such as videos, blog posts, tutorials and news. </p>
                  </div>
              </div>
              
            </section>


            </div>
          {/*フッダー*/}
          <div>
            <h1>About</h1>
            <h1>Me</h1>
            <h1>Contact</h1>
            <h1>Disclaimer</h1>
            <h1>Resources</h1>
            <h1>Amazing tools</h1>
            <h1>Blog</h1>
            <h1>Subscribe to newsletter</h1>
            <h1>Support Me on Ko-fi</h1>
            <h1>Built with TALL stack & ♥ by J-hiz</h1>
          </div>
        </body>


    </html>

  );
}
