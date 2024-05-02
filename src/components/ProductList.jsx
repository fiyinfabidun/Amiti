import jaws from '../assets/JAWS.png';
import pearl from  '../assets/PearlCamera.png';
import fusion from '../assets/Fusion Magnification and Reading Software_.png'
import ruby from '../assets/Ruby Handheld Electronic Magnifier_.png';
import focus from '../assets/Focus Blue Braille Display_.png';
import taylors from '../assets/Taylor_s Mathematical Frame.png';
import perkins from '../assets/Perkins Brailler.png';
import index from '../assets/Index Everest Braille Embossers_.png';
import thermoform from '../assets/thermo.jpg'
import dux from '../assets/Duxbury Braille Translator_.png';
import omi from '../assets/Omnipage Scanning Software_.png';
import slates from '../assets/Slate and Stylus.png';
import uni from '../assets/Universal Braille Kit.png';
import geometry from '../assets/Geometry Sets.png';
import maual from '../assets/Manual Typewriter_.png';
import canes from '../assets/Mobility Canes.png';
import alarm from '../assets/Talking Alarm Clock.png';
import football from '../assets/Football with bells.png';
import joy from '../assets/The Joy of Signing_.png';
import hear from '../assets/Hearing Aids.png';
import dig from '../assets/Audiometer.png';
import Orbit from '../assets/Orbit Reader_.png';
import wheel from '../assets/Wheelchair_.png';
import crutch from '../assets/Crutches_.png';
import talkig from '../assets/Talking Calculator_.png';
import opt from '../assets/Optelec Compact HD.png';
import zoom from '../assets/Zoom Text Magnifier_.png';
import topaz from '../assets/Topaz EZ HD.png';

  const Products = [
    { id: 1, 
      title: 'JAWS Screen Reader', 
      imageUrl: jaws, 
      content: 'JAWS (Job Access With Speech) is a screen reading software that converts on-screen text into speech and braille output, empowering blind and visually impaired individuals to access and interact with computers and digital content '}, 

      { id: 2, 
      title: 'Pearl Reading Camera', 
      imageUrl: pearl, 
      content: 'The Pearl Reading Camera is a portable device designed to scan and read printed text aloud, making printed materials accessible to individuals with visual impairments.'}, 

      { id: 3, 
      title: 'Fusion Magnification and Screen Reading Software', 
      imageUrl: fusion, 
      content: 'The ultimate accessibility tool for schools, agencies, and businesses serving individuals with vision loss. Fusion combines the screen magnification and visual enhancements of ZoomText with the powerful screen reading functionality of JAWS. With a single installer and license, access both ZoomText and JAWS separately or together as the combined solution - Fusion, for enhanced accessibility and productivity.'
      }, 

      { id: 4, 
      title: 'RUBY Handheld Electronic Magnifier', 
      imageUrl: ruby,
      content: 'The RUBY Handheld Electronic Magnifier is a compact and lightweight device that magnifies text and images, enabling individuals with low vision to read documents, labels, and more with ease. '}, 

      { id: 5, 
      title: 'Focus Blue Braille Display', 
      imageUrl: focus, 
      content: 'The Focus Blue Braille Display provides tactile feedback for blind users, allowing them to access digital content on computers, tablets, and smartphones through Braille output.' } ,


      { id: 6, 
      title: 'Taylors Mathematical Frame', 
      imageUrl: taylors, 
      content: 'Taylors Mathematical Frame is a tactile tool designed to assist individuals with visual impairments in understanding and solving mathematical problems, providing a hands-on approach to learning.'}, 

      { id: 7,
      title:'Perkins Braillers', 
      imageUrl: perkins, 
      content: 'Perkins Braillers are reliable and durable braille typewriters, essential for individuals who are blind or visually impaired to create documents, notes, and correspondence independently. '}, 

      { id: 8, 
      title: 'Index Everest Braille Embosser', 
      imageUrl: index,
      content: 'The Index Everest Braille Embosser produces high-quality braille documents from digital text, enabling accessibility for individuals who are blind or have visual impairments.'}, 

      { id: 9, 
      title: 'Thermoform Machines', 
      imageUrl: thermoform, 
      content: 'Thermoform Machines are used to create tactile graphics and raised-line drawings, providing tactile access to visual information for individuals with blindness or low vision. '}, 

      { id: 10, 
      title: 'Duxbury Braille Translator', 
      imageUrl: dux, 
      content: 'Duxbury Braille Translator converts text into braille and vice versa, facilitating communication and access to information for individuals who are blind or have visual impairments.'}, 

      { id: 11, 
      title: 'Omnipage Scanning Softwarer', 
      imageUrl: omi, 
      content: 'Omnipage Scanning Software converts scanned documents into editable text, enhancing accessibility and independence for individuals with visual impairments.'}, 

      { id: 12, 
      title: 'Slates and Stylus', 
      imageUrl: slates, 
      content: 'Slates and Stylus are essential tools for writing braille manually, providing a portable and tactile way for individuals who are blind to take notes and write messages .'}, 

      { id: 13,
      title: 'Universal Braille Kits', 
      imageUrl: uni, 
      content: ' Universal Braille Kits include essential tools and materials for learning and writing braille, supporting individuals with visual impairments in their educational and communication needs'
      }, 

      { id: 14, 
      title: 'Geometry Setsage Scanning Softwarer', 
      imageUrl: geometry, 
      content: ' Geometry Sets adapted for individuals with visual impairments include tactile tools and diagrams to facilitate learning and understanding geometric concepts through touch.'
      }, 

     { id: 15, 
      title: 'Manual Typewriters', 
      imageUrl:  maual, 
      content: ' Manual Typewriters provide a tactile and auditory typing experience for individuals who are blind or visually impaired, enabling independent communication and document creation.'}, 

      {id: 16, 
      title: 'Mobility Canes for the Blind', 
      imageUrl: canes, 
      content: 'Mobility Canes are essential aids for individuals with visual impairments to navigate their surroundings safely and independently, detecting obstacles and changes in terrain'}, 

      {id: 17, 
        title: 'Braille Alarm, Talking Clocks, and Wristwatches', 
        imageUrl: alarm, 
        content: 'These accessible timekeeping devices feature tactile or auditory feedback, enabling individuals with visual impairments to manage their schedules and routines effectively. '},


      {id: 18, 
        title: 'Football with Bell', 
        imageUrl: football, 
        content: 'The Football with Bell is an inclusive sports accessory designed for individuals with visual impairments, featuring a built-in bell for auditory tracking during play.'}, 


      {id: 19, 
        title: 'The Joy of Signing Book Guide', 
        imageUrl: joy, 
        content: 'The Joy of Signing Book Guide is a comprehensive resource for learning American Sign Language (ASL), empowering individuals with hearing impairments to communicate effectively through sign language. '}, 

      {id: 20, 
        title: 'Hearing Aids', 
        imageUrl: hear, 
        content: 'Mobi Hearing Aids amplify sound for individuals with hearing impairments, improving their ability to communicate and engage with their environment. lity Canes are essential aids for individuals with visual impairments to navigate their surroundings safely and independently, detecting obstacles and changes in terrain'}, 
      
      {id: 21, 
        title: 'Digital Audiometer', 
        imageUrl: dig, 
        content: 'The Digital Audiometer is a diagnostic tool used to assess hearing sensitivity and identify hearing impairments, enabling accurate diagnosis and treatment.'}, 

      {id: 22, 
        title: 'Orbit Research Reader', 
        imageUrl: Orbit, 
        content: 'The Orbit Research Reader is a portable device that converts printed text into speech or braille output, providing access to printed materials for individuals with visual impairments. '}, 
      

      {id: 23, 
        title: 'Wheelchair (Different Ranges)', 
        imageUrl: wheel, 
        content: 'Mobility Canes are essential aids for individuals with visual impairments to navigate their surroundings safely and independently, detecting obstacles and changes in terrain'}, 

      {id: 24, 
      title: 'Crutches', 
      imageUrl: crutch, 
      content: 'Crutches provide support and stability for individuals with temporary or permanent mobil  impairments, assisting with walking and maintaining balance'}, 

 

      {id: 25, 
        title: 'Talking Calculator', 
        imageUrl: talkig, 
        content: 'The Talking Calculator features auditory output of mathematical calculations, facilitating independent math problem-solving for individuals with visual impairments.'}, 

      {id: 26, 
        title: 'Optelec Compact 10 HD Speech', 
        imageUrl: opt, 
        content: 'Simple yet feature-packed, the Optelec Compact 10 HD Speech is a user-friendly video magnifier with speech functionality. Flip the switch and use three dials for basic functions: adjust magnification, color modes, and brightness. Ideal for individuals with low vision, offering convenience and powerful features in a compact design. '}, 
      
      {id: 27, 
        title: 'ZoomText Magnifier/Reade', 
        imageUrl: zoom, 
        content: 'Specifically designed for low-vision users, ZoomText Magnifier/Reader is a comprehensive software combining magnification and reading capabilities. It enlarges and enhances content on your computer screen, echoes typing and program activity, and effortlessly reads documents, web pages, and email. Perfect for enhancing accessibility and productivity for individuals with low vision '}, 

        {id: 28, 
          title: 'TOPAZ® EZ HD', 
          imageUrl: topaz, 
          content: 'Experience brilliant magnified images with easy-to-use controls. TOPAZ EZ HD offers uncomplicated magnification with single-function controls and a high-definition camera for superior image quality. Enjoy a wider field of view and a lower magnification range, making it ideal for effortless viewing.'}, ]



export default Products;