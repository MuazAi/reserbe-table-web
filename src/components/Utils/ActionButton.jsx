function ActionButton({children}) {
    return(
        <button style={Styles['action-button']}>{children}</button>
    )
    
}

export default ActionButton;

const Styles = {
    'action-button':{
        'backgroundColor':'var(--primary-color-2)',
        'color':'var(--primary-color-1)',
        'padding':'1rem 2rem',
        'border':'none',
        'borderRadius':'0.5rem',
        'fontSize':'1rem'
    }
}