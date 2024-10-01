export default function Section({title, children, id}){
    return(
        <section id={id}>
            <h2>
                {title}
            </h2>
            {children}
        </section>
    );
}

// ALTERNATIVA CON LE OBJECT PROPS
//CON QUESTA SINTASSI, TUTTI GLI ATTRIBUTI AGGIUNTI SUL COMPOMENTE, VENGONO RAGGRUPPATI IN UN OGGETTONE
//E PASSATTI AL TAG INTERESSATO.
// export default function Section({title, children, ...props}){
//     return(
//         <section {...props}>
//             <h2>
//                 {title}
//             </h2>
//             {children}
//         </section>
//     );
// }