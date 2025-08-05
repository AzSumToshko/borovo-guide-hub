import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, FileText, Vote } from "lucide-react";

const CouncilPage = () => {
  const councilMembers = [
    {
      name: "Мария Петрова",
      role: "Председател на ОбС",
      party: "ГЕРБ-СДС",
      phone: "070010510",
      email: "m.petrova@borovo.bg"
    },
    {
      name: "Димитър Иванов",
      role: "Зам.-председател",
      party: "БСП",
      phone: "070010511",
      email: "d.ivanov@borovo.bg"
    },
    {
      name: "Елена Георгиева",
      role: "Член",
      party: "ДПС",
      phone: "070010512",
      email: "e.georgieva@borovo.bg"
    },
    {
      name: "Иван Стоянов",
      role: "Член",
      party: "ГЕРБ-СДС",
      phone: "070010513",
      email: "i.stoyanov@borovo.bg"
    },
    {
      name: "Румяна Димитрова",
      role: "Член",
      party: "ПП-ДБ",
      phone: "070010514",
      email: "r.dimitrova@borovo.bg"
    },
    {
      name: "Петър Николов",
      role: "Член",
      party: "БСП",
      phone: "070010515",
      email: "p.nikolov@borovo.bg"
    },
    {
      name: "София Атанасова",
      role: "Член",
      party: "ВМРО",
      phone: "070010516",
      email: "s.atanasova@borovo.bg"
    }
  ];

  const meetings = [
    {
      date: "15 август 2025",
      time: "14:00",
      agenda: "Приемане на бюджета за 2026 година",
      status: "Предстояща"
    },
    {
      date: "18 юли 2025",
      time: "14:00",
      agenda: "Обсъждане на инфраструктурни проекти",
      status: "Проведена"
    },
    {
      date: "20 юни 2025",
      time: "14:00",
      agenda: "Отчет за дейността на кмета",
      status: "Проведена"
    }
  ];

  const decisions = [
    {
      number: "Решение №25/2025",
      date: "18 юли 2025",
      title: "Одобряване на проект за реконструкция на площада",
      summary: "Общинският съвет одобри проекта за реконструкция на централния площад с бюджет от 250,000 лв."
    },
    {
      number: "Решение №24/2025",
      date: "20 юни 2025",
      title: "Приемане на отчета на кмета",
      summary: "Приет е отчетът за дейността на кмета за първото полугодие на 2025 година."
    },
    {
      number: "Решение №23/2025",
      date: "15 май 2025",
      title: "Определяне на местни такси и цени",
      summary: "Актуализирани са местните такси за административни услуги за 2025 година."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ОБЩИНСКИ СЪВЕТ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Състав, дейност и решения на Общинския съвет</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Council Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">За Общинския съвет</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Общинският съвет на Община Борово е колективен орган, избиран от гражданите за срок от 4 години. 
              Съставен е от 7 общински съветника, които представляват различни политически сили.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Основните функции включват приемане на бюджета, контрол върху дейността на кмета, 
              взимане на решения по важни въпроси за развитието на общината.
            </p>
          </CardContent>
        </Card>

        {/* Council Members */}
        <h2 className="text-2xl font-bold text-primary mb-6">Състав на Общинския съвет</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {councilMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-[var(--shadow-card)] transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant={member.role === "Председател на ОбС" ? "default" : "outline"}>
                      {member.role}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Партия:</span> {member.party}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div>{member.phone}</div>
                  <div>{member.email}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Meetings */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-primary">
                <Calendar className="w-5 h-5" />
                Предстоящи заседания
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {meetings.map((meeting, index) => (
                <div key={index} className={`p-4 rounded-lg border ${meeting.status === 'Предстояща' ? 'bg-primary/5 border-primary' : 'bg-muted border-border'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold">{meeting.date}</div>
                      <div className="text-sm text-muted-foreground">{meeting.time}</div>
                    </div>
                    <Badge variant={meeting.status === 'Предстояща' ? 'default' : 'outline'}>
                      {meeting.status}
                    </Badge>
                  </div>
                  <div className="text-sm">{meeting.agenda}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-primary">
                <Vote className="w-5 h-5" />
                Статистика
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">25</div>
                  <div className="text-sm text-muted-foreground">Решения 2025</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Заседания 2025</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Съветници</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Присъствие</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Decisions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-primary">
              <FileText className="w-5 h-5" />
              Последни решения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {decisions.map((decision, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-primary">{decision.number}</div>
                    <div className="text-sm text-muted-foreground">{decision.date}</div>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
                <h4 className="font-semibold mb-2">{decision.title}</h4>
                <p className="text-sm text-muted-foreground">{decision.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CouncilPage;