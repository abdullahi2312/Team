
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
  
  import team1 from "../assets/team/team1.jpg";
  import team2 from "../assets/team/team2.jpg";
  import team3 from "../assets/team/team3.jpg";
  import team4 from "../assets/team/team4.jpg";
  
  const teamMembers = [
    {
      id: 1,
      image: team1,
      name: "Ahmed Ali",
      role: "Founder & CEO",
    },
    {
      id: 2,
      image: team2,
      name: "Amina Hassan",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      image: team3,
      name: "Mohamed Yusuf",
      role: "Frontend Developer",
    },
    {
      id: 4,
      image: team4,
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