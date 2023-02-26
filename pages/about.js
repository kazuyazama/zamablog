import Image from "next/image";
import Seo from "../components/Seo";


const About = () => {
    return (
        <>
        <Seo pageTitle="ABOUT" />
        <div className="container mx-auto">
         <div className="md:flex flex-row justify-center px-8 md:px-auto items-center">
         {/* <contaier className="grid grid-cols-8"> */}
        

        <div className="pb-8 md:pb-auto md:basis-3/6">
        {/* <div className="col-span-4 col-start-2"> */}
            <h1 className="text-2xl pb-5">ざまのブログ</h1>

            <p className="leading-relaxed">フロントエンドエンジニア1年目。</p>
            <p className="leading-relaxed"></p>
            <h2 className="pt-2">躓いたところとか、<br />勉強用と誰かの役にたてば。</h2>
           
    

         
        </div>

        <div className="md:basis-1/6">

        {/* <div className=""> */}
       
            
         <div className="mockup-phone p-0 ">
        <div className="camera"></div> 
        <div className="display ">
            <div className="artboard artboard-demo phone-1">
                <Image loader={({src}) => src} src="https://images.microcms-assets.io/assets/b5a02812e4554b0795bbc72514d3cf69/eb9c29e4d2014abea9c2afa91e43d608/IMG_7467.JPG" 
                 alt="座間のブログ" width={330} height={450} />
                
            </div>
        </div>
        </div>
      

        </div>

        </div>   
        </div>
       
        </>
    );
}

export default About;