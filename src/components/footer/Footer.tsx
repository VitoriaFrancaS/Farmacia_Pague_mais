import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    return(
        <>
         <div className="flex justify-center bg-green-900 text-white">
          <div className="container flex flex-col items-center py-4"></div>
          <p className="text-1 font-bold">Farmácia Pague Mais | Copyrithy: 2024</p>
          <p className="text-lg-2">Acesse as redes socias da nossa fundadora:</p>
          <div className="flex-gap-2">
            <LinkedinLogo size={50} weight="bold"/>
            <GithubLogo size={50} weight="bold"/>
          </div>
          </div>
        </>
    )

}

export default Footer;