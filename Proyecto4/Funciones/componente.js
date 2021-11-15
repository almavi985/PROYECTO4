function mifn({updp, comp}) {
    const onSubmited=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const dataObject=Object.fromEntries(formData);
        dataObject.tel=+dataObject.tel;
        updp(dataObject);
        e.target.reset();
    
    };
}
export default mifn;

mifn.onsubmit=function name(params) {
    
}