import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure the CSS file is updated with the styles below

const projects = [
  { 
    id: 1, 
    title: 'The Giraffe Hotel', 
    imageUrl: 'https://i.pinimg.com/564x/e1/36/37/e1363723cbdb79c40c8938da68cd6027.jpg', 
    details: 'A luxurious hotel in the heart of Karen.', 
    cost: 'KES 50,000,000', 
    startDate: '2022-01-01', 
    endDate: '2022-12-31', 
    location: 'Karen, Nairobi', 
    employees: ['John Mwangi', 'Jane Njeri'], 
    engineer: 'Alice Kamau', 
    link: 'https://example.com/giraffe-hotel'
  },
  { 
    id: 2, 
    title: 'Bungalow', 
    imageUrl: 'https://i.pinimg.com/564x/bb/ee/c7/bbeec719905269c534555e5172763118.jpg', 
    details: 'A modern bungalow located in Kitusuru.', 
    cost: 'KES 75,000,000', 
    startDate: '2023-02-15', 
    endDate: '2023-11-30', 
    location: 'Kitusuru, Nairobi', 
    employees: ['David Mutua', 'Sarah Wanjiku'], 
    engineer: 'Michael Kariuki', 
    link: 'https://example.com/bungalow'
  },
  { 
    id: 3, 
    title: 'Mkuti House', 
    imageUrl: 'https://i.pinimg.com/564x/51/32/6c/51326ceacaabf02254b4375c01c0793e.jpg', 
    details: 'A traditional mkuti-roof house in Narok.', 
    cost: 'KES 60,000,000', 
    startDate: '2022-05-10', 
    endDate: '2023-01-15', 
    location: 'Narok', 
    employees: ['Tom Otieno', 'Emma Nduta'], 
    engineer: 'Steven Wambugu', 
    link: 'https://example.com/mkuti-house'
  },
  { 
    id: 4, 
    title: 'Kilifi Beach House', 
    imageUrl: 'https://i.pinimg.com/736x/22/14/ad/2214ad39fdb5bb5438c5f02e6adb0f40.jpg', 
    details: 'A beach house overlooking the Indian Ocean.', 
    cost: 'KES 120,000,000', 
    startDate: '2021-12-01', 
    endDate: '2022-12-01', 
    location: 'Kilifi', 
    employees: ['Mwangi Kinyua', 'Grace Atieno'], 
    engineer: 'Paul Kimani', 
    link: 'https://example.com/kilifi-beach-house'
  },
  { 
    id: 5, 
    title: 'Ngong Mansion', 
    imageUrl: 'https://i.pinimg.com/564x/09/80/37/098037612d8e0868813461e12d092221.jpg', 
    details: 'A luxurious mansion near Ngong Hills.', 
    cost: 'KES 200,000,000', 
    startDate: '2020-06-01', 
    endDate: '2021-06-01', 
    location: 'Ngong', 
    employees: ['Simon Njoroge', 'Ruth Achieng'], 
    engineer: 'Lilian Waweru', 
    link: 'https://example.com/ngong-mansion'
  },
  { 
    id: 6, 
    title: 'Karen Villa', 
    imageUrl: 'https://i.pinimg.com/enabled_lo/564x/87/ec/af/87ecafefac46025e3d7863cdda603e36.jpg', 
    details: 'A modern villa in the lush suburb of Karen.', 
    cost: 'KES 95,000,000', 
    startDate: '2021-08-15', 
    endDate: '2022-08-15', 
    location: 'Karen, Nairobi', 
    employees: ['James Ochieng', 'Winnie Njeri'], 
    engineer: 'Daniel Mwangi', 
    link: 'https://example.com/karen-villa'
  },
  { 
    id: 7, 
    title: 'Mombasa Penthouse', 
    imageUrl: 'https://i.pinimg.com/564x/bd/08/aa/bd08aa5ab9e44f4cbb2a98aa95b61a72.jpg', 
    details: 'A penthouse with a view of the Indian Ocean.', 
    cost: 'KES 150,000,000', 
    startDate: '2023-01-10', 
    endDate: '2023-09-15', 
    location: 'Nyali, Mombasa', 
    employees: ['Dennis Kimathi', 'Elizabeth Wawira'], 
    engineer: 'Brian Mwangi', 
    link: 'https://example.com/mombasa-penthouse'
  },
  { 
    id: 8, 
    title: 'Thika Family Home', 
    imageUrl: 'https://i.pinimg.com/564x/84/55/44/84554450d307225bb5c0af6c854c95d8.jpg', 
    details: 'A spacious family home in Thika.', 
    cost: 'KES 45,000,000', 
    startDate: '2022-02-01', 
    endDate: '2022-10-31', 
    location: 'Thika', 
    employees: ['George Kariuki', 'Mary Wambui'], 
    engineer: 'Isaac Muriuki', 
    link: 'https://example.com/thika-family-home'
  },
  { 
    id: 9, 
    title: 'Nairobi Loft', 
    imageUrl: 'https://i.pinimg.com/564x/2f/84/af/2f84af5eb2ca3d8fa9875f5b2245ed9f.jpg', 
    details: 'A modern loft in the city center.', 
    cost: 'KES 80,000,000', 
    startDate: '2021-09-01', 
    endDate: '2022-06-01', 
    location: 'Westlands, Nairobi', 
    employees: ['Patrick Waweru', 'Esther Auma'], 
    engineer: 'Catherine Mutua', 
    link: 'https://example.com/nairobi-loft'
  }
];

const ProjectSlider = () => {
  return (
    <div className="project-slider-wrapper">
      <div className="project-slider">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            {/* Navigate to /projects/:id to display project details */}
            <Link to={`/projects/${project.id}`}>
              <button className="details-btn">Details</button>
            </Link>
            {/* View More button linking to external site */}
            {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-btn">View More</button>
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
