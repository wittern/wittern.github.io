---
permalink: "/cv"
slug: cv
layout: null
---

<html>
  <head>
    <title>CV Erik Wittern</title>
    <link rel="stylesheet" href="normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
      /* https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/ */

      body {
        padding: 2rem 1rem 2rem 1rem;
        background-color: #444;
        font-family: 'Inter', sans-serif;
      }

      nav {
        height: 60px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      select, a.button {
        font-size: 1rem;
        cursor: pointer;
        padding: 0.2rem 0.3rem 0.2rem 0.3rem;
        border: none;
        outline:none;
        border-radius: 5px;
        background-color: #EEE;
        margin-right: 0.4rem;
      }

      a.button:hover {
        background-color: #ccc;
      }

      h1 {
        text-align: center;
      }
      article h2 {
        text-align: center;
      }

      section {
        padding: 0.25rem 0 0.25rem 0;
      }
      span.address::before {
        content: " - ";
      }

      table {
        font-size: 100%;
      }

      td {
        vertical-align: top;
        padding-bottom: 0.1rem;
      }

      header > h3 {
        margin-block-end: 0rem;
      }

      .location {
        color: gray;
        font-size: 75%;
      }
      body > main {
        max-width: 1000px;
        background-color: white;
        margin: auto;
        padding: 4rem;
        box-sizing: border-box;
      }

      div.main > p {
        margin-block-start: 0.5rem;
      }

      /* Begin: https://css-tricks.com/useful-flexbox-technique-alignment-shifting-wrapping/ */
      .title {
        border-bottom: 1px solid #ccc;
        margin: 0px auto;
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
      }
      .title > span {
        white-space: nowrap;
      }
      .title .role {
        flex-grow: 0;
        padding-right: 0.5rem;
        vertical-align: middle;
      }
      .title .org {
        flex-grow: 1;
        color: gray;
        vertical-align: middle;
      }
      .title .date {
        vertical-align: middle;
        flex-grow: 1;
        text-align: right;
      }
      /* End: https://css-tricks.com/useful-flexbox-technique-alignment-shifting-wrapping/ */

      .contact {
        color: #666;
        text-align: center;
      }
      .v-divider {
        margin: 0rem 0.5rem 0rem 0.5rem;
        border-left: 1px solid #777;
      }

      /* Begin: https://tobiasahlin.com/blog/layered-smooth-box-shadows/ */
      .shadow-5 {
        box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
                    0 4px 4px rgba(0,0,0,0.12), 
                    0 8px 8px rgba(0,0,0,0.12), 
                    0 16px 16px rgba(0,0,0,0.12),
                    0 32px 32px rgba(0,0,0,0.12);
      }
      /* End: https://tobiasahlin.com/blog/layered-smooth-box-shadows/ */

      @media only screen and (max-width: 640px) {
        body > div.main {
          padding: 2rem;
        }
      }

      @page {
        margin: 0;
      }
      @page :first {

      }
      @media print {
        body {
          font-size: 65%;
        }
        h1, h2, h3 {
          margin: 0.5rem 0 0 0;
        }
        ul {
          padding-left: 1rem;
        }
        nav {
          display: none;
        }
        .shadow-5 {
          box-shadow: none;
        }
        body > main {
          max-width: 2000px;
          padding-top: 2rem;
          padding-bottom: 0;
        }
        div.page-break {
          display: block;
          height: 3rem;
          page-break-before: always;
        }
      }
    </style>
  </head>
  <body>
    <nav>
      <a class="button" href="/">Back...</a>
      <a class="button" onclick="window.print()">
        Print...
      </a>
      <select id="language">
        <option value="en-US">English (US)</option>
        <option value="de-DE">German</option>
      </select>
    </nav>

    <main class="shadow-5">
      <p class="contact">
        erikwittern@gmail.com <span class="v-divider"></span>
        +49 176 20 18 5661 <span class="v-divider"></span>
        @erikwittern <span class="v-divider"></span>
        wittern.net
      </p>
      <h1 lang="en-US">CV John Erik Wittern</h1>
      <h1 lang="de-DE">Lebenslauf John Erik Wittern</h1>

      <article>
        <h2 lang="en-US">Industry experience</h2>
        <h2 lang="de-DE">Berufserfahrung</h2>

        <!-- IBM GraphQL Lead Architect -->
        <section lang="en-US">
          <header>
            <h3>
              GraphQL Lead Architect
            </h3>
            <h4 class="title">
              <span class="org">
                IBM Hybrid Cloud Integration <span class="address">Hamburg, Germany</span>
              </span>
              <span class="date">
                <time datetime="2019-10-01">October 2019 - November 2020</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Leading team of developers in the US and Taiwan to bring GraphQL features to IBM's DataPower/API Connect product.
            </p>
            <ul>
              <li>
                Design, prioritization and implementation of core features (incl. query validation, static analysis, schema views; in C++ / TypeScript / Rust).
              </li>
              <li>
                Sharing knowledge and teaching colleagues about GraphQL (one-to-one & via presentations).
              </li>
              <li>
                Productization of previous research results.
              </li>
            </ul>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              GraphQL Lead Architect
            </h3>
            <h4 class="title">
              <span class="org">
                IBM Hybrid Cloud Integration <span class="address">Hamburg, Deutschland</span>
              </span>
              <span class="date">
                <time datetime="2019-10-01">Oktober 2019 - November 2020</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Leitung von Team aus Entwicklern in den USA und Taiwan bei der Integration von GraphQL Fähigkeiten in IBMs DataPower/API Connect.
            </p>
            <ul>
              <li>
                Design, Priorisierung, und Implementierung der Kernfeatures (inkl. Query Validierung, statischer Query Analyse, Schema-Sichten; in C++ / TypeScript / Rust).
              </li>
              <li>
                Wissen teilen und Kollegen anleiten (eins-zu-eins sowie durch Präsentationen).
              </li>
              <li>
                Überführung von Forschungsergebnissen ins Produkt.
              </li>
            </ul>
          </div>
        </section>

        <!-- IBM Research Staff Member -->
        <section lang="en-US">
          <header>
            <h3>
              Research Staff Member & Technical Lead
            </h3>
            <h4 class="title">
              <span class="org">
                IBM T.J. Watson Research Center <span class="address">Yorktown Heights, NY, USA</span>
              </span>
              <span class="date">
                <time datetime="2014-10-01">October 2014 - September 2019</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              <em>
                IBM Research is the world’s largest and most established industrial research organization, and the innovation engine of IBM. Research Staff Members drive this innovation through technical and scientific work.
              </em>
            </p>
            <p>
              Key researcher on web APIs and GraphQL within the Cloud Computing department: leading teams of researchers and software engineers, setting technical directions, and communicating goals, results, and broader technology trends to upper management – in addition to hands-on research and engineering. Projects include:
            </p>
            <ul>
              <li>
                R&D of GraphQL API management facilities, resulting in my selection as IBM's technical representative in the GraphQL Foundation and my later role as IBM's GraphQL lead architect.
              </li>
              <li>
                R&D of OpenAPI-to-GraphQL, an open-sourced library for migrating APIs to GraphQL. Includes overseeing related open-source process (testing automation, release management, customer support).
              </li>
              <li>
                Design, implementation, and continuous operation of API Harmony, an API catalog in the IBM Cloud, which relies on mining web APIs and their use in open-source projects.
              </li>
            </ul>
            <p>
              Apart from product adoption, my work has resulted in over 20 patents for IBM, and multiple publications in top international conferences and journals (publication / public speaking list provided upon request).
            </p>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Research Staff Member & Technical Lead
            </h3>
            <h4 class="title">
              <span class="org">
                IBM T.J. Watson Research Center <span class="address">Yorktown Heights, NY, USA</span>
              </span>
              <span class="date">
                <time datetime="2014-10-01">Oktober 2014 - September 2019</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              <em>
                IBM Research ist die größte und etablierteste industrielle Forschungseinrichtung der Welt, und der Innovations-Motor von IBM. Research Staff Members sind die Wissenschaftler, die diese Institution weltweit mit ihrer Expertise und ihrer technischen und wissenschaftlichen Arbeit antreiben.
              </em>
            </p>
            <p>
              Leitender Forscher zu Web APIs und GraphQL im Cloud Computing: Leitung von Teams aus Forschern und Entwicklern, Bestimmung der Forschungsagenda und Kommunikation von Zielen, Ergebnissen, und Technologie-Trends ans obere Management – parallel zu eigenen Forschungs- und Entwicklungsbeiträgen. Projekte & Erfolge:
            </p>
            <ul>
              <li>
                F&E von GraphQL API Management. In Konsequenz wurde ich zum technischen Vertreter IBMs in der GraphQL Foundation ernannt und erhielt meine Rolle als IBMs GraphQL Lead Architect.
              </li>
              <li>
                F&E von OpenAPI-to-GraphQL, einer open-source Bibliothek zur Migration zu GraphQL. Verantwortung für open-source Prozesse wie automatische Tests, Release Management, Kundensupport.
              </li>
              <li>
                Konzipierung, Implementierung und kontinuierlicher operativer Betrieb von API Harmony, einem API Katalog in der IBM Cloud, der Daten zu Web APIs und deren Nutzung in GitHub sammelt.
              </li>
            </ul>
            <p>
              Neben Beiträgen zu Produkten konnte ich durch meine Arbeit über 20 Patente für IBM generieren, sowie zahlreiche technische Beiträge in internationalen Spitzen-Konferenzen und -Journalen entwickeln.
            </p>
          </div>
        </section>

        <!-- FZI -->
        <section lang="en-US">
          <header>
            <h3>
              Research Scientist
            </h3>
            <h4 class="title">
              <span class="org">
                FZI Research Center for Information Technology <span class="address">Berlin, Germany</span>
              </span>
              <span class="date">
                <time datetime="2012-08-01">August 2012 - July 2014</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Research and teaching in Cloud Computing and Software Engineering, including representation of the research group in EU multi-partner/industry-research consortium, contributions to research proposals, and supervision of master and bachelor students.
            </p>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Wissenschaftlicher Mitarbeiter
            </h3>
            <h4 class="title">
              <span class="org">
                FZI Forschungszentrum für Informatik <span class="address">Berlin, Deutschland</span>
              </span>
              <span class="date">
                <time datetime="2012-08-01">August 2012 - Juli 2014</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Forschung und Lehre im Cloud Computing und Software Engineering, inklusive Vertretung der Forschungsgruppe in EU Forschungskonsortium aus Industrie und Akademie, Mitarbeit an Forschungsanträgen, und der Betreuung von Master- und Bachelorarbeiten.
            </p>
          </div>
        </section>

        <!-- IBM Summer Intern -->
        <section lang="en-US">
          <header>
            <h3>
              Research intern
            </h3>
            <h4 class="title">
              <span class="org">
                IBM T.J. Watson Research Center <span class="address">Yorktown Heights, NY, USA</span>
              </span>
              <span class="date">
                <time datetime="2013-06-03">June 2013 - August 2013</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Research on "Scalable Service Ecosystems", resulting in scientific paper and 4 patents, and laying the intellectual and technical groundwork for the later creation of API Harmony.
            </p>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Forschungspraktikant
            </h3>
            <h4 class="title">
              <span class="org">
                IBM T.J. Watson Research Center <span class="address">Yorktown Heights, NY, USA</span>
              </span>
              <span class="date">
                <time datetime="2013-06-03">Juni 2013 - August 2013</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Forschung zu "Scalable Service Ecosystems", resultierend in wissenschaftlicher Publikation und 4 Patenten, und als Grundlage für die spätere Entwicklung von API Harmony.
            </p>
          </div>
        </section>

        <!-- Deutsche Bank Intern -->
        <section lang="en-US">
          <header>
            <h3>
              Intern in Inhouse Consulting
            </h3>
            <h4 class="title">
              <span class="org">
                  Deutsche Bank AG <span class="address">Frankfurt am Main, Germany</span>
              </span>
              <span class="date">
                <time datetime="2009-04-03">April 2009 - July 2009</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Working on group-strategic projects "Marketing & Communication and Realignment of Business Management" and "Global Banking Know Your Customer".
            </p>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Praktikant im Inhouse Consulting
            </h3>
            <h4 class="title">
              <span class="org">
                  Deutsche Bank AG <span class="address">Frankfurt am Main, Deutschland</span>
              </span>
              <span class="date">
                <time datetime="2009-04-03">April 2009 - Juli 2009</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Mitarbeit an den konzernweiten Strategieprojekten "Marketing & Communication and Realignment of Business Management" und "Global Banking Know Your Customer".
            </p>
          </div>
        </section>

        <!-- IBM Deutschland Intern -->
        <section lang="en-US">
          <header>
            <h3>
              Intern in Global Business Services
            </h3>
            <h4 class="title">
              <span class="org">
                IBM Deutschland GmbH <span class="address">Düsseldorf, Germany</span>
              </span>
              <span class="date">
                <time datetime="2008-03-17">March 2008 - July 2008</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Design of technical tests for RFID system; design of an dynamic Content Management System.
            </p>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Praktikant im Bereich Global Business Services
            </h3>
            <h4 class="title">
              <span class="org">
                IBM Deutschland GmbH <span class="address">Düsseldorf, Deutschland</span>
              </span>
              <span class="date">
                <time datetime="2008-03-17">März 2008 - Juli 2008</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Entwicklung technischer Tests für ein RFID System; Konzipierung eines dynamischen Content MGMT Systems.
            </p>
          </div>
        </section>

      </article>

      <div class="page-break"></div>

      <article>
        <h2 lang="en-US">Education</h2>
        <h2 lang="de-DE">Ausbildung</h2>

        <!-- PhD -->
        <section lang="en-US">
          <header>
            <h3>
              PhD in computer science
            </h3>
            <h4 class="title">
              <span class="org">
                Karlsruhe Institute of Technology (KIT) <span class="address">Karlsruhe, Germany</span>
              </span>
              <span class="date">
                <time datetime="2010-08-01">August 2010 - May 2014</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Received title "Dr.-Ing." (magna cum laude) for work on "Modeling and Selection of Software Service Variants" at the Institute of Applied Informatics and Formal Description Methods (AIFB) under supervision of Prof. Dr. Stefan Tai.
            </p>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Promotion in Informatik
            </h3>
            <h4 class="title">
              <span class="org">
                Karlsruher Institut für Technologie (KIT) <span class="address">Karlsruhe, Deutschland</span>
              </span>
              <span class="date">
                <time datetime="2010-08-01">August 2010 - Mai 2014</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <p>
              Erhalt von Titel "Dr.-Ing." (magna cum laude) für Arbeit zu "Modeling and Selection of Software Service Variants” am Institut für Angewandte Informatik und Formale Beschreibungsverfahren (AIFB) unter Prof. Dr. Stefan Tai.
            </p>
          </div>
        </section>

        <!-- Study Wirtschaftsingenieurwesen -->
        <section lang="en-US">
          <header>
            <h3>
              Diplom (MSc equivalent) "Wirtschaftsingenieurwesen" (engineering & management)
            </h3>
            <h4 class="title">
              <span class="org">
                Karlsruhe Institute of Technology (KIT) <span class="address">Karlsruhe, Germany</span>
              </span>
              <span class="date">
                <time datetime="2004-10-01">October 2004 - July 2010</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <ul>
              <li>
                Grade 1.5 ("very good”), focus on computer science
              </li>
              <li>
                Working as a research assistant from December 2009 to March 2010
              </li>
            </ul>
          </div>
        </section>

        <section lang="de-DE">
          <header>
            <h3>
              Studium Wirtschaftsingenieurwesen (mit Fokus Informatik)
            </h3>
            <h4 class="title">
              <span class="org">
                Karlsruher Institut für Technologie (KIT) <span class="address">Karlsruhe, Deutschland</span>
              </span>
              <span class="date">
                <time datetime="2004-10-01">Oktober 2004 - Juli 2010</time>
              </span>
            </h4>
          </header>
          <div class="main">
            <ul>
              <li>
                Erlangung des Grades Dipl.-Wirtschaftsingenieur mit Note 1,5 (sehr gut).
              </li>
              <li>
                Tätigkeit als wissenschaftliche Hilfskraft von Dezember 2009 bis März 2010.
              </li>
            </ul>
          </div>
        </section>
      </article>

      <article>
        <h2 lang="en-US">Technical eminence</h2>
        <h2 lang="de-DE">Technische Eminenz</h2>

        <div class="main" lang="en-US">
          <ul>
            <li>Over 25 talks at international scientific as well as at developer conferences (e.g., API Conference 2019, API Strategy 2018, IBM InterConnect 2018)</li>
            <li>Technical representative of IBM in the GraphQL Foundation since March 2019</li>
            <li>Creator and co-maintainer of OpenAPI-to-GraphQL (>800 GitHub stars) and GraphQL Query Generator (>200 stars) open-source project</li>
            <li>Member of program committees of numerous international top conferences (MSR, ICWE, ICWS ICSME etc.) and of the steering committee of the ESOCC conference since 2016</li>
            <li>Co-organizer of international scientific events, including the 2nd Vienna Software Seminar "DevOps and Microservice APIs” in August 2019 and multiple workshops (MoTA 2016; M4IoT 2017 & 2018) at the Middleware conference</li>
            <li>Book co-author "Cloud Service Benchmarking", published by Springer</li>
            <li>Author of over 25 scientific, peer-reviewed articles in leading international conferences and journals (over 500 citations) and 20 patents</li>
            <li>Reviewer of technical contributions to leading journals & national grant proposals (Canada, Israel etc.)</li>
          </ul>
        </div>

        <div class="main" lang="de-DE">
          <ul>
            <li>Über 25 Vorträge auf internationalen wissenschaftlichen sowie technischen Konferenzen (z.B. API Conference 2019, API Strategy 2018, IBM InterConnect 2018)</li>
            <li>Technischer Vertreter IBMs und Founding Member in der GraphQL Foundation seit März 2019</li>
            <li>Author und Co-Maintainer von OpenAPI-to-GraphQL (>800 GitHub Sterne) und GraphQL Query Generator (>200 GitHub Sterne) Open-Source-Projekten</li>
            <li>Mitglied des Programm Komitees zahlreicher internationaler Top-Konferenzen (MSR, ICWE, ICWS ICSME etc.) und des Steering Komitees der ESOCC Konferenz seit 2016</li>
            <li>Mitveranstalter internationaler wissenschaftlicher Events, inklusive dem 2nd Vienna Software Seminar "DevOps and Microservice APIs” im August 2019 und mehreren Workshops (MoTA 2016; M4IoT 2017 & 2018) auf der Middleware Konferenz</li>
            <li>Buch Co-Autor „Cloud Service Benchmarking”, publiziert bei Springer</li>
            <li>Autor von über 25  wissenschaftlichen, peer-reviewed Fachartikeln, in internationalen Top-Konferenzen und Journalen (über 500 Zitierungen) und 20 Patenten</li>
            <li>Begutachter technischer Beiträge in Top-Journalen & nationaler Forschungsanträge (u.A. Kanada, Israel)</li>
          </ul>
        </div>
      </article>

      <article>
        <h2 lang="en-US">Awards / Honors</h2>
        <h2 lang="de-DE">Auszeichnungen</h2>

        <div class="main" lang="en-US">
          <ul>
            <li>5 IBM Innovation Plateaus – Recognition for submitting in sum 20 patents for IBM</li>
            <li>IBM "A Level Accomplishment" for "Research Contributions to the API Economy and SaaS Transformation"</li>
            <li>Distinguished Reviewer Award at the MSR Conference in 2019</li>
            <li>ACM SIGSOFT Distinguished Paper Awards at the ESEC/FSE 2020 and at the MSR 2018 conferences</li>
            <li>IBM "Open Source Strategic Leader" accomplishment for work on OpenAPI-to-GraphQL</li>
         </ul>
        </div>

        <div class="main" lang="de-DE">
          <ul>
            <li>5 IBM Innovations Plateaus – Auszeichnungen als Anerkennung für die Entwicklung von 20 Patenten</li>
            <li>IBM "A Level Accomplishment" (Auszeichung für Einflussreiche technische und wissenschaftliche Beiträge) für "Research Contributions to the API Economy and SaaS Transformation"</li>
            <li>Distinguished Reviewer Award auf der MSR Konferenz in 2019</li>
            <li>ACM SIGSOFT Distinguished Paper Awards auf der ESEC/FSE 2020 und der MSR 2018 Konferenz</li>
            <li>IBM "Open Source Strategic Leader" Auszeichnung für Arbeit an OpenAPI-to-GraphQL</li>
         </ul>
        </div>
      </article>

      <article>
        <h2 lang="en-US">Side projects</h2>
        <h2 lang="de-DE">Nebenprojekte</h2>

        <div class="main" lang="en-US">
          <ul>
            <li>MagicOS.co: Application for managing Old School Magic collections (React.js, Google Cloud)</li>
            <li>numbie: Anonymous, ephemeral, real-time location sharing (Meteor, Heroku)</li>
            <li>GravityQuest: Retro game, in the iOS app store from 2014 to 2017 (Phaser.js)</li>
            <li>TechCrunch Disrupt: 3-times participant and developer in the TechCrunch Disrupt NYC Hackathon (awarded tickets to the main conference after evaluation of the outcome each time)</li>
          </ul>
        </div>

        <div class="main" lang="de-DE">
          <ul>
            <li>MagicOS.co: Verwaltungsapplikation für Old School Magic Sammlungen (React.js, Google Cloud)</li>
            <li>numbie: Anonyme, vergängliche Lokalisierung in Echtzeit (Meteor, Heroku)</li>
            <li>GravityQuest: Retrospiel, im iOS App Store von 2014 bis 2017 (Phaser.js)</li>
            <li>TechCrunch Disrupt: 3-facher Teilnehmer und App-Entwickler beim TechCrunch Disrupt NYC Hackathon (jedes Mal von der Jury mit Tickets zur Hauptkonferenz ausgezeichnet)</li>
          </ul>
        </div>
      </article>

      <article>
        <h2 lang="en-US">Social engagement</h2>
        <h2 lang="de-DE">Soziales Engagement</h2>

        <div class="main" lang="en-US">
          <ul>
            <li>Volunteer judge at the Westchester Science & Engineering Fair (WESEF) in New York, 2015 to 2019</li>
            <li>President of the UNICEF student organization at KIT from July 2008 to August 2010</li>
          </ul>
        </div>

        <div class="main" lang="de-DE">
          <ul>
            <li>Ehrenamtlicher Juror der Westchester Science & Engineering Fair (WESEF) in New York, 2015 bis 2019</li>
            <li>Leiter der UNICEF Hochschulgruppe am KIT vom Juli 2008 bis August 2010</li>
          </ul>
        </div>
      </article>

      <article>
        <h2 lang="en-US">IT skills</h2>
        <h2 lang="de-DE">IT Kenntnisse</h2>

        <div class="main" lang="en-US">
          <table>
            <tr>
              <td>Programming:</td>
              <td>TypeScript/JavaScript/Node, C++, Rust, Python, Java, Ruby, HTML, CSS</td>
            </tr>
            <tr>
              <td>Frameworks:</td>
              <td>React.js, Vue.js, Express, Google Firebase, Bootstrap etc.</td>
            </tr>
            <tr>
              <td>Cloud technologies:</td>
              <td>GraphQL, OpenAPI, REST, serverless (OpenWhisk), Git, Docker, Kubernetes, Istio etc.</td>
            </tr>
          </table>
        </div>

        <div class="main" lang="de-DE">
          <table>
            <tr>
              <td>Programmieren:</td>
              <td>TypeScript/JavaScript/Node, C++, Rust, Python, Java, Ruby, HTML, CSS</td>
            </tr>
            <tr>
              <td>Frameworks:</td>
              <td>React.js, Vue.js, Express, Google Firebase, Bootstrap etc.</td>
            </tr>
            <tr>
              <td>Cloud Technologien:</td>
              <td>GraphQL, OpenAPI, REST, serverless (OpenWhisk), Git, Docker, Kubernetes, Istio etc.</td>
            </tr>
          </table>
        </div>
      </article>


      <article>
        <h2 lang="en-US">Languages</h2>
        <h2 lang="de-DE">Sprachen</h2>

        <div class="main" lang="en-US">
          <p>
            German (native speaker), English (business fluent), French (basic knowledge)
          </p>
        </div>

        <div class="main" lang="de-DE">
          <p>
            Deutsch (Muttersprachler), Englisch (verhandlungssicher), Französisch (Grundkenntnisse)
          </p>
        </div>
      </article>

      <article>
        <h2 lang="en-US">Hobbies</h2>
        <h2 lang="de-DE">Hobbies</h2>

        <div class="main" lang="en-US">
          <p>
            Tennis, Old School Magic, programming, reading, cooking
          </p>
        </div>

        <div class="main" lang="de-DE">
          <p>
            Tennis, Old School Magic, Programmieren, Lesen, Kochen
          </p>
        </div>
      </article>

    </main>

    <script>
      // Hide non-specified / German parts initially:
      const choices = ['en-US', 'de-DE']
      const hash = window.location.hash
        ? window.location.hash.substring(1)
        : null
      const showLang = hash && choices.indexOf(hash) !== -1
        ? hash
        : 'en-US'
      if (hash !== showLang) {
        window.location.hash = `#${showLang}`
      }
      const hideLang = showLang === 'en-US' ? 'de-DE' : 'en-US'
      document.querySelectorAll(`:lang(${hideLang})`).forEach(el => el.hidden = true)

      // Set selection:
      const selectElement = document.getElementById('language')
      selectElement.value = showLang

      // React to changes in the select element:
      selectElement.addEventListener('change', (event) => {
        const showLang = event.target.value
        window.location.hash = `#${showLang}`
        const hideLang = showLang === 'de-DE' ? 'en-US' : 'de-DE'
        document.querySelectorAll(`:lang(${showLang})`).forEach(el => el.hidden = false)
        document.querySelectorAll(`:lang(${hideLang})`).forEach(el => el.hidden = true)
      })
    </script>
  </body>
</html>
