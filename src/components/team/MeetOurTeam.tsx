import Image from "next/image";
import SectionLabel from "@/ui/typography/SectionLabel";
import { MEET_OUR_TEAM_DATA } from "./constants";

export default function MeetOurTeam() {
  return (
    <section className="relative w-full bg-bg-team-sec flex justify-center overflow-hidden font-helvetica">
      <div className="relative z-10 w-full mx-auto px-5 md:px-[40px] lg:px-[56px] py-16 lg:py-[80px] flex flex-col items-center">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-[60px]">
          <div className="flex flex-col items-start text-left max-w-[234px]">
            <SectionLabel>{MEET_OUR_TEAM_DATA.label}</SectionLabel>
            <h2 className="mt-3 text-[30px] md:text-[36px] lg:text-[48px] font-medium font-helvetica text-text-dark leading-[1.16] tracking-[-0.01em] whitespace-pre-line">
              {MEET_OUR_TEAM_DATA.title}
            </h2>
          </div>

          <p className="max-w-[585px] text-base md:text-[18px] font-normal font-host text-text-muted leading-[1.6] tracking-[-0.01em] text-left">
            {MEET_OUR_TEAM_DATA.description}
          </p>
        </div>

        <div className="w-full max-w-[1354px] mx-auto mt-12 lg:mt-[55px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-[20px] xl:gap-[30px] justify-items-center">
          {MEET_OUR_TEAM_DATA.members.map((member) => (
            <div
              key={member.id}
              className="w-full max-w-[306px] flex flex-col items-center text-center group"
            >
              <div className="relative w-[202px] h-[202.77px] rounded-full overflow-hidden mb-6 flex-shrink-0 bg-c-2a2a2a">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="202px"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-start gap-1 h-[122px]">
                <h3 className="text-[16px] lg:text-[20px] font-medium font-helvetica text-text-dark leading-[1.44] lg:leading-[1.48] tracking-[-0.01em]">
                  {member.name}
                </h3>
                <p className="text-xs md:text-[15px] font-normal font-helvetica text-text-muted leading-[22px] tracking-[-0.01em]">
                  {member.role}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs md:text-[16px] font-normal font-host text-c-2b2b2b hover:text-brand-red transition-colors leading-[1.6] tracking-[-0.01em] break-all"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
