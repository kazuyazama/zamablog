import { useForm } from "react-hook-form";
import {init,send} from '@emailjs/browser';
import Seo from "../components/Seo";

const Form = () => {
    const { register,handleSubmit,reset,formState:{ errors }} = useForm();
    
    const onSubmit = (formData) => {

        console.log(formData)

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

        if(
            userID !== undefined &&
            serviceID !== undefined &&
            templateID !== undefined
        ) {
            init(userID)

          
            send(serviceID,templateID ,formData)
            .then(() => {
            alert('送信完了しました');
            }, () => {
            alert('送信出来ませんでした');
            })
            reset();
        }
    }
   
    return (
        <>
        <Seo pageTitle="お問い合わせ" pageDescription="お問い合わせページです。"/>
        <div className="container mx-auto px-8 md:px-40">

        <div className="w-full ">

        <h1 className="text-center pb-10">お問い合わせフォーム</h1>

        <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="pb-5" >
        <label htmlFor="name">名前</label>
        <input type="text" id="name" placeholder="田中　太郎" className="input w-full mt-3" 
        {...register('name',{required:'名前を入力してください'})}/>
        {errors.name && <div>{errors.name.message}</div>}
        </div>

        <div className="pb-5">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" placeholder="tanaka@gmail.com" className="input w-full mt-3" 
        {...register('email',{required:'メールアドレスを入力してください'})}/>
        {errors.name && <div>{errors.email.message}</div>}
        </div>

        <div className="pb-5">
        <label>
        <p>お問い合わせ内容</p>
        <textarea className="textarea w-full mt-3" placeholder="お問い合わせ内容を記入してください" rows="5"
        {...register('message')}>
        </textarea>    
        </label> 
        </div> 

        <div className="text-center">
        <button type="submit" className="btn btn-block">送信</button>
        </div>

        </form>
 
        </div>


        </div>

        
        </>
    );
}

export default Form;