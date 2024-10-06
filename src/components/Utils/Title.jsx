
function Title({children,level,color}) {
    if(level === 1){
        let Styles_ = {...Styles['main-title']}
        if(color!=undefined){
            Styles_={...Styles_['main-title'],'color':color}
        }
        return(
            <h1 style={Styles_}>{children}</h1>
        )
    }
    if(level === 2){
        return(
            <h2 style={Styles['sub-title']}>{children}</h2>
        )
    }
    if(level === 3){
        return(
            <h3>{children}</h3>
        )
    }
    if(level === 4){
        return(
            <h4>{children}</h4>
        )
    }
}

export default Title;
const Styles = {
    'main-title':{
        'fontSize':'3rem',
        'color':'var(--primary-color-2)',
        'margin':'0'
    },
    'sub-title':{
        'fontSize':'2rem',
        'margin':'0',
        'color':'var(--primary-color-2)',
    }
}