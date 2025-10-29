import { useState } from 'react';
import { format } from 'date-fns';

type Doctor = {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  image: string;
};

const doctors: Doctor[] = [
  { id: 1, name: 'Dr. Aisha Verma', specialization: 'Cardiologist', experience: '10 years', rating: 4.8, image: 'https://images.unsplash.com/photo-1551601651-6b3c9f2f0b07?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4b7f5b3f5c3a1c2f' },
  { id: 2, name: 'Dr. Rohan Mehta', specialization: 'Dermatologist', experience: '7 years', rating: 4.5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f0c6b4f5a1b3c6d' },
  { id: 3, name: 'Dr. Priya Singh', specialization: 'Neurologist', experience: '9 years', rating: 4.9, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7b9d9c2d4a5f1b6c' },
];

export default function DoctorAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctors[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const handleBook = () => {
    if (!selectedDate) return;
    setShowModal(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book a Doctor Appointment</h2>

      {/* Doctor selection cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {doctors.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDoctor(d)}
            className={`flex flex-col items-center gap-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left ${selectedDoctor.id === d.id ? 'ring-2 ring-blue-300 bg-white' : 'bg-gray-50 dark:bg-gray-800'}`}
          >
            <img src={d.image} alt={d.name} className="w-20 h-20 rounded-full object-cover border" />
            <div className="text-sm">
              <div className="font-semibold">{d.name}</div>
              <div className="text-gray-500 text-xs">{d.specialization}</div>
              <div className="text-gray-500 text-xs">{d.experience}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected doctor info */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-28 h-28 rounded-lg object-cover shadow" />
          <div className="flex-1">
            <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
            <div className="text-gray-500">{selectedDoctor.specialization} • {selectedDoctor.experience}</div>
            <div className="mt-2 inline-flex items-center gap-2 text-sm text-yellow-600">⭐ {selectedDoctor.rating}</div>
            <p className="mt-3 text-sm text-gray-600">{selectedDoctor.name} provides patient-centered care with years of experience and a focus on clear explanations and personalized treatment plans.</p>
          </div>
        </div>
      </div>

      {/* Booking area */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h4 className="text-lg font-semibold mb-4">Choose appointment date</h4>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <label className="text-sm text-gray-600 block mb-2">Select date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border rounded-md p-2 w-full"
            />
            {selectedDate && (
              <div className="text-sm text-gray-500 mt-2">Selected: {format(new Date(selectedDate), 'PPP')}</div>
            )}
          </div>

          <div className="w-full sm:w-auto">
            <button
              onClick={handleBook}
              disabled={!selectedDate}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-md shadow"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowModal(false)} />
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 z-10 w-11/12 max-w-md">
            <h4 className="text-lg font-bold mb-2">Appointment booked</h4>
            <p className="text-sm text-gray-600">Your appointment with <strong>{selectedDoctor.name}</strong> on <strong>{selectedDate ? format(new Date(selectedDate), 'PPP') : ''}</strong> has been confirmed (dummy confirmation).</p>
            <div className="mt-4 text-right">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded">OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
