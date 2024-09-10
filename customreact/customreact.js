function CustomRender(reactElement,conatainer){
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
}

const reactElement ={

    type : 'a',
    props:{
        href: 'https://google.com',

    }

    }
  children :'click me to children'

const mainContainer =document.querySelector('#root')
 CustomRender(reactElement , mainContainer)