import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const EventsPage = () => {
  const events = [
    { title: "Откриване на реконструирания площад", date: "20.09.2025", place: "Централен площад", desc: "Тържествено откриване с концерт." },
    { title: "Есенен панаир Борово", date: "10.10.2025", place: "Парк Борово", desc: "Щандове на местни производители и занаяти." },
    { title: "Кръгла маса за младежки политики", date: "05.11.2025", place: "Зала община", desc: "Дискусия с участие на млади хора и НПО." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">СЪБИТИЯ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Календар на общинските събития</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <Card key={i} className="hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Calendar className="w-5 h-5" /> {e.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div><span className="font-medium">Дата:</span> {e.date}</div>
              <div><span className="font-medium">Място:</span> {e.place}</div>
              <div className="pt-2">{e.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;