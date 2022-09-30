
import Image from "next/image";
import Layout from "../components/Layout";

const About = () => {
    return (
        <>
        <Layout>
        <main className="container mx-auto">
         <contaier className="flex flex-row justify-center">
         {/* <contaier className="grid grid-cols-8"> */}
        

        <div className="basis-3/6">
        {/* <div className="col-span-4 col-start-2"> */}
            <h1 className="text-2xl pb-5">ざまのブログ</h1>
            <p className="leading-relaxed">座間和也（ざまかずや）現在28歳a</p>
            <p className="leading-relaxed">神奈川県川崎市生まれ、東京都町田市在住</p>
            <p className="leading-relaxed">通信業界10年目で某ネット回線代理店の社長やってます。</p>
            <ul className="leading-relaxed list-decimal py-2">
                <li>高卒でドコモショップ（3年経験）</li>
                <li>支店1位</li>
                <li>NURO光の訪販販売会社就職（1年半経験</li>
                <li>アベレージ55（1年間）</li>
                <li>フルコミ</li>
                <li>SBの訪問販売</li>
                <li>アベレージ45（3年間</li>
                <li>起業</li>
                <li>社長就任</li>
            </ul>
            
        
            <p className="leading-relaxed">この業界のリテラシーが低いのでそれを変えるべく、インターネット回線、wifiを中心に <br />
            業界の裏側までリアルな情報を発信していきます。 <br />
            その他、プログラミング、webマーケティング等他にもいろいろ書いていきますが <br />
            こちらはただの勉強ブログなので見なくて大丈夫です。
            </p>



           
        </div>

        <div className="basis-1/6 ">

        {/* <div className=""> */}
       
            
         <div className="mockup-phone ">
        <div className="camera"></div> 
        <div className="display">
            <div className="artboard artboard-demo phone-1">
                <Image loader={({src}) => src} src="https://images.microcms-assets.io/assets/b5a02812e4554b0795bbc72514d3cf69/eb9c29e4d2014abea9c2afa91e43d608/IMG_7467.JPG" 
                 alt="座間のブログ" width={350} height={450}  />
                
            </div>
        </div>
        </div>
      

        </div>
                
            

       

        </contaier>   
        </main>
        </Layout>
        </>
    );
}

export default About;