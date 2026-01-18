// import { useState } from "react";
// import { Calendar, MapPin } from "lucide-react";

// // Import all images
// import event1 from "@/assets/event1.jpg";
// import event2 from "@/assets/event2.jpg";
// import event3 from "@/assets/EVENT3.jpg";
// import event4 from "@/assets/event4.jpg";
// import competition1 from "@/assets/COMPETITION1.jpg";
// import competition2 from "@/assets/COMPETITION2.jpg";

// // Event data with proper image URLs
// const events = [
//   {
//     id: 1,
//     title: "Forum Rabat-Mines",
//     date: "April 15, 2025",
//     location: "Rabat, ENIM",
//     category: "Forum",
//     image: event1,
//     description: "Forum Mines Rabat Entreprises. Le carrefour privilégié entre les entreprises leaders et les talents de l'école d'ingénieurs de référence au Maroc. "
//   },
//   {
//     id: 2,
//     title: "Stand Robotics - CMC",
//     date: "February 28, 2024",
//     location: "IAV RABAT",
//     category: "Stand",
//     image: event2,
//     description: "le stand de notre Club Robotics CMC, où nous présentons nos projets réalisés en robotique. Venez explorer nos innovations et en apprendre plus sur nos réalisations !"
//   },
//   {
//     id: 3,
//     title: "Stand Robotics - CMC ",
//     date: "January 20, 2024",
//     location: "Bebliothéque National , Rabat",
//     category: "Stand",
//     image: event3,
//     description: "Notre Club Robotics CMC a installé son stand à la Bibliothèque Nationale, où nous présentons nos projets en robotique et partageons notre passion pour l'innovation technologique."
//   },
//   {
//     id: 4,
//     title: "Distrubition des Certificats de Graphique Design",
//     date: "24 july, 2024",
//     location: "Complex Culturel Ocp , El Jadida",
//     category: "Formation",
//     image: event4,
//     description: "Soutnence de projet final de Graphique design sous le Nom de Tounawar."
//   },
//   {
//     id: 5,
//     title: "Competition Robotics - CMC ",
//     date: "5 JUNE 2025",
//     location: "EHTP , Casablanca",
//     category: "Competitions",
//     image: competition1,
//     description: "Notre Club Robotics CMC est fier d'avoir remporté le 1er prix à l'EHTP grâce à nos projets innovants en robotique. Venez découvrir notre savoir-faire et notre passion pour la technologie !"
//   },
//   {
//     id: 6,
//     title: "Competition Robotics - CMC ",
//     date: "25 MAY 2024",
//     location: "ENIM , Rabat",
//     category: "Competitions",
//     image: competition2,
//     description: "Notre Club Robotics CMC a participé au competition de robotique de l'EHTP à Casablanca, présentant nos projets innovants et notre passion pour la technologie."
//   }
// ];

// const EventGalleryComplete = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

//   const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];
  
//   const filteredEvents = selectedCategory === "All" 
//     ? events 
//     : events.filter(event => event.category === selectedCategory);

//   return (
//     <section className="min-h-screen py-20 px-4 bg-black">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 
//             className="text-5xl md:text-7xl font-bold mb-6"
//             style={{ 
//               background: "linear-gradient(135deg, #ec4899, #f472b6, #fbbf24)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text"
//             }}
//           >
//             Event Gallery
//           </h1>
//           <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             A curated collection of memorable moments from the events I've attended, 
//             each one a stepping stone in my professional journey.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer border-0 ${
//                 selectedCategory === category
//                   ? "text-white"
//                   : "text-gray-200 bg-white/10 backdrop-blur-md"
//               }`}
//               style={
//                 selectedCategory === category
//                   ? { 
//                       background: "linear-gradient(135deg, #ec4899, #f472b6)",
//                       boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)"
//                     }
//                   : {}
//               }
//               onMouseEnter={(e) => {
//                 if (selectedCategory !== category) {
//                   e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (selectedCategory !== category) {
//                   e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
//                 }
//               }}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Events Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredEvents.map((event) => (
//             <div
//               key={event.id}
//               className="group overflow-hidden transition-all duration-500 cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/50"
//               onMouseEnter={() => setHoveredEvent(event.id)}
//               onMouseLeave={() => setHoveredEvent(null)}
//             >
//               {/* Event Image */}
//               <div className="relative overflow-hidden h-64">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
//                 {/* Category Badge */}
//                 <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold bg-pink-500/90 text-white">
//                   {event.category}
//                 </div>

//                 {/* Hover Overlay */}
//                 <div 
//                   className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-pink-500/90"
//                   style={{
//                     opacity: hoveredEvent === event.id ? 1 : 0
//                   }}
//                 >
//                   <p className="text-white text-center px-6 font-medium">
//                     {event.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Event Details */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-pink-300 transition-colors">
//                   {event.title}
//                 </h3>
                
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-pink-400" />
//                     <span className="text-sm text-gray-300">
//                       {event.date}
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4 text-pink-400" />
//                     <span className="text-sm text-gray-300">
//                       {event.location}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
//               {events.length}
//             </div>
//             <div className="text-base text-gray-200">
//               Events Attended
//             </div>
//           </div>
          
//           <div className="text-center">
//             <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
//               {categories.length - 1}
//             </div>
//             <div className="text-base text-gray-200">
//               Event Categories
//             </div>
//           </div>
          
//           <div className="text-center">
//             <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
//               6+
//             </div>
//             <div className="text-base text-gray-200">
//               Projects Showcased
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventGalleryComplete;