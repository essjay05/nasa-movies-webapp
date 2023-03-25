import './Footer.styles.scss'

const Footer = () => {
  return (
    <footer className='d-flex justify-content-around align-items-center bg-dark py-3 px-2'>
      <a href="https://www.joyserquina.com" target="_blank" rel="noreferrer" name="Link to Joy's Portfolio">Submitted by Joy S.</a>
      <a href="https://www.linkedin.com/in/joy-serquina" target="_blank" rel="noreferrer" name="Link to Joy's LinkedIn">Joy's LinkedIn</a>
      <a href="https://github.com/essjay05/nasa-movies-webapp" target="_blank" rel="noreferrer">Github Source Code</a>
    </footer>
  )
}

export default Footer