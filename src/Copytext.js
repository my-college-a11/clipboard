import React from 'react'
class CopyCliboard extends React.Component {

    componentDidMount(){
        let textContainer = document.getElementById('text-container').innerText;
        document.getElementById('holdtext').value = textContainer;
    }

    copyText(){
        let text = document.getElementById('holdtext');
        text.style.display = 'block';
        text.select();

        try{
            let status = document.execCommand('copy');
            if(!status){
                alert('cant copy')
            }else{
                alert('copy')
            }
        }catch{

        }
        text.style.display = "none"
    }
    render() {
        return(
        <>
        <section  className='copy-text'>
        <code id='text-container' className='text-container'>Copy here</code>
        <textarea id='holdtext' defaultValue= ""></textarea>
        <button onClick={this.copyText}>Copy</button>
        <h4>Paste here.</h4>
        <input type='text' />
        </section>
        </>
        )
    }
}
export default CopyCliboard;