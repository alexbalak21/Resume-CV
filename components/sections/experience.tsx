import { MapPin } from "lucide-react"

interface Experience {
  id: string
  title: string
  company: string
  logo: string
  logoColor: string
  dateRange: string
  location: string
  isPresent?: boolean
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "VR designer",
    company: "Meta",
    logo: "∞",
    logoColor: "bg-blue-500",
    dateRange: "Present",
    location: "Menlo Park, California",
    isPresent: true,
  },
  {
    id: "2",
    title: "Product designer",
    company: "Apple",
    logo: "",
    logoColor: "bg-black",
    dateRange: "Jul 20 - Jan 2022",
    location: "Cupertino, California",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Tesla",
    logo: "T",
    logoColor: "bg-red-600",
    dateRange: "Oct 2015 - Mar 2020",
    location: "Austin, Texas",
  },
  {
    id: "4",
    title: "Design system architect",
    company: "Google",
    logo: "G",
    logoColor: "bg-white border-2 border-gray-200",
    dateRange: "Sep 2014 - Aug 2015",
    location: "Mountain View, California",
  },
  {
    id: "5",
    title: "Senior product design",
    company: "Vectornator",
    logo: "✦",
    logoColor: "bg-black",
    dateRange: "Sep 2010 - Jul 2013",
    location: "Berlin, Germany",
  },
]

export function Experience() {
  return (
    <div className="space-y-4 border-l ps-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="rounded-xl p-5" style={{ backgroundColor: "#F7F9FC" }}>
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 ${exp.logoColor}`}
              >
                {exp.logo}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-base text-gray-500 mb-1">{exp.title}</p>
                    <p className="text-xl font-semibold text-gray-900">{exp.company}</p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    {exp.isPresent ? (
                      <>
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-md mb-1">
                          Present
                        </span>
                        <div className="flex items-center justify-end gap-1.5 text-sm text-gray-500 mt-2">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-600 font-medium mb-1">{exp.dateRange}</p>
                        <div className="flex items-center justify-end gap-1.5 text-sm text-gray-500">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
