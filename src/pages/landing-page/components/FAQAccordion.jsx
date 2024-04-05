"use client";

import { Accordion } from "flowbite-react";

const FAQAccordion = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          Apakah kursus ini cocok untuk pemula yang ingin belajar coding dari
          nol?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Ya, tentu saja program ini cocok untuk pemula yang ingin belajar
            coding dari nol! Bootcamp Full Stack JavaScript Ascent dirancang
            untuk pemula dan mereka yang ingin belajar coding dari nol. Kami
            akan membantu kamu memahami konsep dasar pemrograman dengan bahasa
            pemrograman JavaScript.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Apa yang saya akan pelajari dalam kursus coding ini?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Dalam bootcamp / kursus coding ini, kamu akan belajar dasar-dasar
            pemrograman, belajar bahasa pemrograman JavaScript, pemrograman web,
            dan banyak lagi. Ini adalah bootcamp yang akan menghasilkan front
            end developer dan juga back end developer bahkan full stack
            developer.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Apakah saya akan mendapat sertifikat setelah lulus?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Setelah kamu lulus kamu akan mendapat sertifikat kelulusan dari
            Ascent yang bisa kamu gunakan sebagai pengalaman tambahan di CV
            kamu.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Apakah siswa akan dicarikan kerja setelah lulus?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Setelah kamu lulus kami akan membantu kamu mendapatkan pekerjaan.
            Perusahaan rekanan kami akan melakukan rekrutmen bagi setiap peserta
            yang lulus pelatihan.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default FAQAccordion;
