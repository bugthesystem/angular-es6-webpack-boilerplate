export default function WhiteSpaceFilter(){

    return (text)=>{

        if(!!text){

            let result = text.replace(/\s/g, '');
            return result;
        }

    }
}