
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
    
  const teamMembers = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/8d/72/e5/8d72e5242c6791054361585691091ce5.jpg",
      name: "Ahmed Ali",
      role: "Founder & CEO",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/97/00/39/970039811e175ebcdc498513345b5df2.jpg",
      name: "Amina Hassan",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/60/13/5f/60135f8f78ae18503b07c4a8c279d739.jpg",
      name: "Mohamed Yusuf",
      role: "Frontend Developer",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/d9/94/14/d99414c0748622881f0c0dc63a0d3d60.jpg",
      name: "Fatima Omar",
      role: "Marketing Manager",
    },
  ];
  
  function Team  ()  {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
  
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Team
            </span>
  
            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              Meet Our Professional Team
            </h2>
  
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our experienced team works every day to provide the best
              shopping experience for our customers.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                  />
                </div>
  
                <div className="p-6 text-center">
  
                  <h3 className="text-2xl font-bold text-gray-800">
                    {member.name}
                  </h3>
  
                  <p className="text-blue-600 mt-2">
                    {member.role}
                  </p>
  
                  <div className="flex justify-center gap-4 mt-6">
  
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                    >
                      <FaFacebookF />
                    </a>
  
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sky-500 hover:text-white transition"
                    >
                      <FaTwitter />
                    </a>
  
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
                    >
                      <FaLinkedinIn />
                    </a>
  
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                    >
                      <FaInstagram />
                    </a>
  
                  </div>
  
                </div>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Team;