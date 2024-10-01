export default function Tabs({children, buttons, container}){
    const Container = container
    // NB se si imposta già nelle prop 'Container', in maiuscolo, non c'è bisogno di creare la costante.
    return(
        <>
        <Container>
            {buttons}
        </Container>
        {children}
        </>
    );
}

// alternative senza const

// export default function Tabs({children, buttons, Container}){
    
//     return(
//         <>
//         <Container>
//             {buttons}
//         </Container>
//         {children}
//         </>
//     );
// }


// alternativa con prop impostata di default

// export default function Tabs({children, buttons, container = 'menu'}){
//      con la destrutturazione in oggetti possiamo impostare un valore predefinito per il container
//     const Container = container
//     // NB se si imposta già nelle prop 'Container', in maiuscolo, non c'è bisogno di creare la costante.
//     return(
//         <>
//         <Container>
//             {buttons}
//         </Container>
//         {children}
//         </>
//     );
// }