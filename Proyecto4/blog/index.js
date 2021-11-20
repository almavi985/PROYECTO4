//funciones con propositos
function fonda(props){ //muestra la imagen con proposiotoo
    return (
       <img
         className="fonda"
         src={props.user.fondaUrl}
         alt={props.user.name}
       />
     );
   }
   
   function UserInfo(props){//Propositos con el nombre de la img
     return(
    <><fonda user={props.user} /><div className="UserInfo-name">{props.user.name}</div></>
     );
   }
   
   function Comment(props){//Porppsitos sobre el comentario de img
     return(
       <div className="Comment">
       <UserInfo user={props.author} />
         <div className="Comment-text">{props.text}
         </div>
       </div>
     );
   }
   
   const comment = {//Declaracion de el comentario, nombre de img y la img
     text: 'Ven, conoce y disfruta un momento especial',
     author: {
       name: 'Nuestra fonda',
       fondaUrl: 'https://mxcity.mx/wp-content/uploads/2015/09/Fonda-mexicana-1024x682.jpg',
     },
   };