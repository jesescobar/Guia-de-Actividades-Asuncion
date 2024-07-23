import React from "react";

const events = [
  {
    date: "07",
    month: "Jul",
    title: "Los Museos se muestran",
    location: "Centro de Asunción",
    details: "Ver detalles",
    imageUrl: "src/resource/image/images (2).jpeg",
  },
  {
    date: "18",
    month: "Jul",
    title: "Evento 1",
    location: "A confirmar",
    details: "Ver detalles",
    imageUrl: "src/resource/image/museo 1.jpeg",
  },
  {
    date: "20",
    month: "Jul",
    title: "Nombre del Evento",
    location: "Asunción",
    details: "Ver detalles",
    imageUrl: "src/resource/image/museo 3.jpeg",
  },
  {
    date: "25",
    month: "Jul",
    title: "Nombre del Evento",
    location: "Asunción",
    details: "Ver detalles",
    imageUrl: "",
  },
  {
    date: "28",
    month: "Jul",
    title: "Nombre del Evento",
    location: "Asunción",
    details: "Ver detalles",
    imageUrl: "",
  },
  {
    date: "29",
    month: "Jul",
    title: "Nombre del Evento",
    location: "Asunción",
    details: "Ver detalles",
    imageUrl: "",
  },
];

const Events = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Próximos eventos</h2>
        <h3 className="text-2xl text-gray-500 mt-2">Eventos Destacados</h3>
        <div className="mt-8 flex justify-center space-x-4 mb-8">
          <select className="bg-gray-200 px-4 py-2 rounded">
            <option>Semana</option>
          </select>
          <select className="bg-gray-200 px-4 py-2 rounded">
            <option>Tipo de evento</option>
          </select>
          <select className="bg-gray-200 px-4 py-2 rounded">
            <option>Categoría</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {event.date}
                  </div>
                  <div className="text-gray-600">{event.month}</div>
                </div>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-24 w-24 rounded-lg object-cover"
                />
              </div>
              <h4 className="text-xl font-bold">{event.title}</h4>
              <p className="mt-2 text-gray-500">{event.location}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                {event.details}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
