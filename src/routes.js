// src/routes.js
import Layout from "./Layout";
import Home from "./Components/Pages/Home";
import Notes from "./Components/Pages/Notes";
import NotFound from "./Components/NotFound";
import Events from "./Components/Pages/Events";
import AIDS from "./Components/SPPU/2019/AIDS";
import CS from "./Components/SPPU/2019/CS";
import IT from "./Components/SPPU/2019/IT";
import AIML from "./Components/SPPU/2019/AIML";
import AidsSem3 from "./Components/SPPU/2019/AIDS/Sem-3/AidsSem3";
import Search from "./Components/Search";

import AidsSem4 from "./Components/SPPU/2019/AIDS/Sem-4/AidsSem4";
import AidsSem5 from "./Components/SPPU/2019/AIDS/Sem-5/AidsSem5";
import AidsSem6 from "./Components/SPPU/2019/AIDS/Sem-6/AidsSem6";
import AidsSem7 from "./Components/SPPU/2019/AIDS/Sem-7/AidsSem7";
import AidsSem8 from "./Components/SPPU/2019/AIDS/Sem-8/AidsSem8";

import CsSem3 from "./Components/SPPU/2019/CS/Sem-3/CsSem3";
import CsSem4 from "./Components/SPPU/2019/CS/Sem-4/CsSem4";
import CsSem5 from "./Components/SPPU/2019/CS/Sem-5/CsSem5";
import CsSem6 from "./Components/SPPU/2019/CS/Sem-6/CsSem6";
import CsSem7 from "./Components/SPPU/2019/CS/Sem-7/CsSem7";
import CsSem8 from "./Components/SPPU/2019/CS/Sem-8/CsSem8";

import ItSem3 from "./Components/SPPU/2019/IT/Sem-3/ItSem3";
import ItSem4 from "./Components/SPPU/2019/IT/Sem-4/ItSem4";
import ItSem5 from "./Components/SPPU/2019/IT/Sem-5/ItSem5";
import ItSem6 from "./Components/SPPU/2019/IT/Sem-6/ItSem6";
import ItSem7 from "./Components/SPPU/2019/IT/Sem-7/ItSem7";
import ItSem8 from "./Components/SPPU/2019/IT/Sem-8/ItSem8";

import AimlSem3 from "./Components/SPPU/2019/AIML/Sem-3/AimlSem3";
import AimlSem4 from "./Components/SPPU/2019/AIML/Sem-4/AimlSem4";
import AimlSem5 from "./Components/SPPU/2019/AIML/Sem-5/AimlSem5";
import AimlSem6 from "./Components/SPPU/2019/AIML/Sem-6/AimlSem6";
import AimlSem7 from "./Components/SPPU/2019/AIML/Sem-7/AimlSem7";
import AimlSem8 from "./Components/SPPU/2019/AIML/Sem-8/AimlSem8";

import A210241 from "./Components/SPPU/2019/AIDS/Sem-3/210241";
import A210242 from "./Components/SPPU/2019/AIDS/Sem-3/210242";
import A210243 from "./Components/SPPU/2019/AIDS/Sem-3/210243";
import A210244 from "./Components/SPPU/2019/AIDS/Sem-3/210244";
import A217521 from "./Components/SPPU/2019/AIDS/Sem-3/217521";

import A210252 from "./Components/SPPU/2019/AIDS/Sem-4/210252";
import A210253 from "./Components/SPPU/2019/AIDS/Sem-4/210253";
import A217528 from "./Components/SPPU/2019/AIDS/Sem-4/217528";
import A217529 from "./Components/SPPU/2019/AIDS/Sem-4/217529";
import A217530 from "./Components/SPPU/2019/AIDS/Sem-4/217530";

import A310241 from "./Components/SPPU/2019/AIDS/Sem-5/310241";
import A310245b from "./Components/SPPU/2019/AIDS/Sem-5/310245b";
import A310252 from "./Components/SPPU/2019/AIDS/Sem-5/310252";
import A310253 from "./Components/SPPU/2019/AIDS/Sem-5/310253";
import A317521 from "./Components/SPPU/2019/AIDS/Sem-5/317521";

import A310254c from "./Components/SPPU/2019/AIDS/Sem-6/310254c";
import A317529 from "./Components/SPPU/2019/AIDS/Sem-6/317529";
import A317530 from "./Components/SPPU/2019/AIDS/Sem-6/317530";
import A317531 from "./Components/SPPU/2019/AIDS/Sem-6/317531";

import A417522 from "./Components/SPPU/2019/AIDS/Sem-7/417522";
import A417523a from "./Components/SPPU/2019/AIDS/Sem-7/417523a";
import A417524C from "./Components/SPPU/2019/AIDS/Sem-7/417524C";
import A417521 from "./Components/SPPU/2019/AIDS/Sem-7/417521";

import A417530 from "./Components/SPPU/2019/AIDS/Sem-8/417530";
import A417531 from "./Components/SPPU/2019/AIDS/Sem-8/417531";
import A417532A from "./Components/SPPU/2019/AIDS/Sem-8/417532A";
import A417533B from "./Components/SPPU/2019/AIDS/Sem-8/417533B";

import B210241 from "./Components/SPPU/2019/CS/Sem-3/210241";
import B210242 from "./Components/SPPU/2019/CS/Sem-3/210242";
import B210243 from "./Components/SPPU/2019/CS/Sem-3/210243";
import B210244 from "./Components/SPPU/2019/CS/Sem-3/210244";
import B210245 from "./Components/SPPU/2019/CS/Sem-3/210245";

import B207003 from "./Components/SPPU/2019/CS/Sem-4/207003";
import B210252 from "./Components/SPPU/2019/CS/Sem-4/210252";
import B210253 from "./Components/SPPU/2019/CS/Sem-4/210253";
import B210254 from "./Components/SPPU/2019/CS/Sem-4/210254";
import B210255 from "./Components/SPPU/2019/CS/Sem-4/210255";

import B310241 from "./Components/SPPU/2019/CS/Sem-5/310241";
import B310242 from "./Components/SPPU/2019/CS/Sem-5/310242";
import B310243 from "./Components/SPPU/2019/CS/Sem-5/310243";
import B310244 from "./Components/SPPU/2019/CS/Sem-5/310244";
import B310245B from "./Components/SPPU/2019/CS/Sem-5/310245B";

import B310251 from "./Components/SPPU/2019/CS/Sem-6/310251";
import B310252 from "./Components/SPPU/2019/CS/Sem-6/310252";
import B310253 from "./Components/SPPU/2019/CS/Sem-6/310253";
import B310254C from "./Components/SPPU/2019/CS/Sem-6/310254C";

import B410241 from "./Components/SPPU/2019/CS/Sem-7/410241";
import B410242 from "./Components/SPPU/2019/CS/Sem-7/410242";
import B410243 from "./Components/SPPU/2019/CS/Sem-7/410243";
import B410244B from "./Components/SPPU/2019/CS/Sem-7/410244B";
import B410245C from "./Components/SPPU/2019/CS/Sem-7/410245C";

import B410250 from "./Components/SPPU/2019/CS/Sem-8/410250";
import B410251 from "./Components/SPPU/2019/CS/Sem-8/410251";
import B410252A from "./Components/SPPU/2019/CS/Sem-8/410252A";
import B410253C from "./Components/SPPU/2019/CS/Sem-8/410253C";
import B410701 from "./Components/SPPU/2019/CS/Sem-8/410701";

import C214441 from "./Components/SPPU/2019/IT/Sem-3/214441";
import C214442 from "./Components/SPPU/2019/IT/Sem-3/214442";
import C214443 from "./Components/SPPU/2019/IT/Sem-3/214443";
import C214444 from "./Components/SPPU/2019/IT/Sem-3/214444";
import C214445 from "./Components/SPPU/2019/IT/Sem-3/214445";

import C207003 from "./Components/SPPU/2019/IT/Sem-4/207003";
import C214451 from "./Components/SPPU/2019/IT/Sem-4/214451";
import C214452 from "./Components/SPPU/2019/IT/Sem-4/214452";
import C214453 from "./Components/SPPU/2019/IT/Sem-4/214453";
import C214454 from "./Components/SPPU/2019/IT/Sem-4/214454";

import C314441 from "./Components/SPPU/2019/IT/Sem-5/314441";
import C314442 from "./Components/SPPU/2019/IT/Sem-5/314442";
import C314443 from "./Components/SPPU/2019/IT/Sem-5/314443";
import C314444 from "./Components/SPPU/2019/IT/Sem-5/314444";
import C310245B from "./Components/SPPU/2019/IT/Sem-5/310245B";

import C314451 from "./Components/SPPU/2019/IT/Sem-6/314451";
import C314452 from "./Components/SPPU/2019/IT/Sem-6/314452";
import C314453 from "./Components/SPPU/2019/IT/Sem-6/314453";
import C314454C from "./Components/SPPU/2019/IT/Sem-6/314454C";

import C414441 from "./Components/SPPU/2019/IT/Sem-7/414441";
import C414442 from "./Components/SPPU/2019/IT/Sem-7/414442";
import C414443 from "./Components/SPPU/2019/IT/Sem-7/414443";
import C414444 from "./Components/SPPU/2019/IT/Sem-7/414444";
import C414445 from "./Components/SPPU/2019/IT/Sem-7/414445";

import C414450 from "./Components/SPPU/2019/IT/Sem-8/414450";
import C414451 from "./Components/SPPU/2019/IT/Sem-8/414451";
import C414452 from "./Components/SPPU/2019/IT/Sem-8/414452";

import D318541 from "./Components/SPPU/2019/AIML/Sem-5/318541";
import D318542 from "./Components/SPPU/2019/AIML/Sem-5/318542";
import D318543 from "./Components/SPPU/2019/AIML/Sem-5/318543";
import D3318544 from "./Components/SPPU/2019/AIML/Sem-5/3318544";
import D318545 from "./Components/SPPU/2019/AIML/Sem-5/318545";

import D418541 from "./Components/SPPU/2019/AIML/Sem-7/418541";
import D418542 from "./Components/SPPU/2019/AIML/Sem-7/418542";
import D418543 from "./Components/SPPU/2019/AIML/Sem-7/418543";
import D418544A from "./Components/SPPU/2019/AIML/Sem-7/418544A";
import D418545A from "./Components/SPPU/2019/AIML/Sem-7/418545A";
import ComingSoon from "./Components/ComingSoon";
import FE24 from "./Components/SPPU/2024/FE24";
import PHY24 from "./Components/SPPU/2024/FE/Phy";
import CHE24 from "./Components/SPPU/2024/FE/Che";
import M124 from "./Components/SPPU/2024/FE/M1";
import BXE24 from "./Components/SPPU/2024/FE/Bxe";
import BEE24 from "./Components/SPPU/2024/FE/Bee";
import GRA24 from "./Components/SPPU/2024/FE/Gra";
import MEC24 from "./Components/SPPU/2024/FE/Mec";
import PPS24 from "./Components/SPPU/2024/FE/Pps";

import PdfViewer from "./Components/pdfViewer";







export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        handle: {
          title: "Home | Notes Website",
          description: "Welcome to the notes website. Browse branches and semesters.",
        },
      },

      { path: "sppu", element: <Notes />, },
      { path: "sppu/2019-pattern", element: <Notes />, },  
      { path: "sppu/2024-pattern", element: <Notes />, },    

           
      
      { path: "events", element: <Events />},
      { path: "search", element: <Search />},
      { path: "*", element: <NotFound />},
      {path: "/coming-soon", element: <ComingSoon />},
      {path: "/pdf", element: <PdfViewer />},


      // SPPU 2019 Pattern Branches

      
      { path: "sppu/2019-pattern/aids", element: <AIDS />},
      
      { path: "sppu/2019-pattern/aids/sem-3", element: <AidsSem3 />},
            {path: "sppu/2019-pattern/aids/sem-3/210241", element: <A210241 />,  },
            {path: "sppu/2019-pattern/aids/sem-3/210242", element: <A210242 />,  },
            {path: "sppu/2019-pattern/aids/sem-3/210243", element: <A210243 />,  },
            {path: "sppu/2019-pattern/aids/sem-3/210244", element: <A210244 />,  },
            {path: "sppu/2019-pattern/aids/sem-3/217521", element: <A217521 />,  },
            


      { path: "sppu/2019-pattern/aids/sem-4", element: <AidsSem4 />},
            {path: "sppu/2019-pattern/aids/sem-4/210252", element: <A210252 />,  },
            {path: "sppu/2019-pattern/aids/sem-4/210253", element: <A210253 />,  },
            {path: "sppu/2019-pattern/aids/sem-4/217528", element: <A217528 />,  },
            {path: "sppu/2019-pattern/aids/sem-4/217529", element: <A217529 />,  },
            {path: "sppu/2019-pattern/aids/sem-4/217530", element: <A217530 />,  },



      { path: "sppu/2019-pattern/aids/sem-5", element: <AidsSem5 />},
            {path: "sppu/2019-pattern/aids/sem-5/310241", element: <A310241 />,  },
            {path: "sppu/2019-pattern/aids/sem-5/310245b", element: <A310245b />,  },
            {path: "sppu/2019-pattern/aids/sem-5/310252", element: <A310252 />,  },
            {path: "sppu/2019-pattern/aids/sem-5/310253", element: <A310253 />,  },
            {path: "sppu/2019-pattern/aids/sem-5/317521", element: <A317521 />,  },
            


      { path: "sppu/2019-pattern/aids/sem-6", element: <AidsSem6 />},
            {path: "sppu/2019-pattern/aids/sem-6/310254c", element: <A310254c />,  },
            {path: "sppu/2019-pattern/aids/sem-6/317529", element: <A317529 />,  },
            {path: "sppu/2019-pattern/aids/sem-6/317530", element: <A317530 />,  },
            {path: "sppu/2019-pattern/aids/sem-6/317531", element: <A317531 />,  },




      { path: "sppu/2019-pattern/aids/sem-7", element: <AidsSem7 />},
            {path: "sppu/2019-pattern/aids/sem-7/417521", element: <A417521 />,  },
            {path: "sppu/2019-pattern/aids/sem-7/417522", element: <A417522 />,  },
            {path: "sppu/2019-pattern/aids/sem-7/417523A", element: <A417523a />,  },
            {path: "sppu/2019-pattern/aids/sem-7/417524C", element: <A417524C />,  },




      { path: "sppu/2019-pattern/aids/sem-8", element: <AidsSem8 />},
            {path: "sppu/2019-pattern/aids/sem-8/417530", element: <A417530 />,  },
            {path: "sppu/2019-pattern/aids/sem-8/417531", element: <A417531 />,  },
            {path: "sppu/2019-pattern/aids/sem-8/417532A", element: <A417532A />,  },
            {path: "sppu/2019-pattern/aids/sem-8/417533B", element: <A417533B />,  },



      
      
      { path: "sppu/2019-pattern/cs", element: <CS />},

      { path: "sppu/2019-pattern/cs/sem-3", element: <CsSem3 />},
            { path: "sppu/2019-pattern/cs/sem-3/210241", element: <B210241 />,  },
            { path: "sppu/2019-pattern/cs/sem-3/210242", element: <B210242 />,  },
            { path: "sppu/2019-pattern/cs/sem-3/210243", element: <B210243 />,  },
            { path: "sppu/2019-pattern/cs/sem-3/210244", element: <B210244 />,  },
            { path: "sppu/2019-pattern/cs/sem-3/210245", element: <B210245 />,  },




      { path: "sppu/2019-pattern/cs/sem-4", element: <CsSem4 />}, 
            { path: "sppu/2019-pattern/cs/sem-4/207003", element: <B207003 />},
            { path: "sppu/2019-pattern/cs/sem-4/210252", element: <B210252 />},
            { path: "sppu/2019-pattern/cs/sem-4/210253", element: <B210253 />},
            { path: "sppu/2019-pattern/cs/sem-4/210254", element: <B210254 />},
            { path: "sppu/2019-pattern/cs/sem-4/210255", element: <B210255 />},



      { path: "sppu/2019-pattern/cs/sem-5", element: <CsSem5 />},
            { path: "sppu/2019-pattern/cs/sem-5/310241", element: <B310241 />},
            { path: "sppu/2019-pattern/cs/sem-5/310242", element: <B310242 />},
            { path: "sppu/2019-pattern/cs/sem-5/310243", element: <B310243 />},
            { path: "sppu/2019-pattern/cs/sem-5/310244", element: <B310244 />},
            { path: "sppu/2019-pattern/cs/sem-5/310245B", element: <B310245B />},



      { path: "sppu/2019-pattern/cs/sem-6", element: <CsSem6 />},
            { path: "sppu/2019-pattern/cs/sem-6/310251", element: <B310251 />},
            { path: "sppu/2019-pattern/cs/sem-6/310252", element: <B310252 />},
            { path: "sppu/2019-pattern/cs/sem-6/310253", element: <B310253 />},
            { path: "sppu/2019-pattern/cs/sem-6/310254C", element: <B310254C />},



      { path: "sppu/2019-pattern/cs/sem-7", element: <CsSem7 />},
            { path: "sppu/2019-pattern/cs/sem-7/410241", element: <B410241 />},
            { path: "sppu/2019-pattern/cs/sem-7/410242", element: <B410242 />},
            { path: "sppu/2019-pattern/cs/sem-7/410243", element: <B410243 />},
            { path: "sppu/2019-pattern/cs/sem-7/410244B", element: <B410244B />},
            { path: "sppu/2019-pattern/cs/sem-7/410245C", element: <B410245C />},



      { path: "sppu/2019-pattern/cs/sem-8", element: <CsSem8 />},
            { path: "sppu/2019-pattern/cs/sem-8/410250", element: <B410250 />},
            { path: "sppu/2019-pattern/cs/sem-8/410251", element: <B410251 />},
            { path: "sppu/2019-pattern/cs/sem-8/410252A", element: <B410252A />},
            { path: "sppu/2019-pattern/cs/sem-8/410253C", element: <B410253C />},
            { path: "sppu/2019-pattern/cs/sem-8/410701", element: <B410701 />},




      { path: "sppu/2019-pattern/it", element: <IT />},

      { path: "sppu/2019-pattern/it/sem-3", element: <ItSem3 />},
            { path: "sppu/2019-pattern/it/sem-3/214441", element: <C214441 />},
            { path: "sppu/2019-pattern/it/sem-3/214442", element: <C214442 />},
            { path: "sppu/2019-pattern/it/sem-3/214443", element: <C214443 />},
            { path: "sppu/2019-pattern/it/sem-3/214444", element: <C214444 />},
            { path: "sppu/2019-pattern/it/sem-3/214445", element: <C214445 />},



      { path: "sppu/2019-pattern/it/sem-4", element: <ItSem4 />},
            { path: "sppu/2019-pattern/it/sem-4/207003", element: <C207003 /> },
            { path: "sppu/2019-pattern/it/sem-4/214451", element: <C214451 /> },
            { path: "sppu/2019-pattern/it/sem-4/214452", element: <C214452 /> },
            { path: "sppu/2019-pattern/it/sem-4/214453", element: <C214453 /> },
            { path: "sppu/2019-pattern/it/sem-4/214454", element: <C214454 /> },


      { path: "sppu/2019-pattern/it/sem-5", element: <ItSem5 />},
            { path: "sppu/2019-pattern/it/sem-5/314441", element: <C314441 /> },
            { path: "sppu/2019-pattern/it/sem-5/314442", element: <C314442 /> },
            { path: "sppu/2019-pattern/it/sem-5/314443", element: <C314443 /> },
            { path: "sppu/2019-pattern/it/sem-5/314444", element: <C314444 /> },
            { path: "sppu/2019-pattern/it/sem-5/310245B", element: <C310245B /> },

      { path: "sppu/2019-pattern/it/sem-6", element: <ItSem6 />},
            { path: "sppu/2019-pattern/it/sem-6/314451", element: <C314451 /> },
            { path: "sppu/2019-pattern/it/sem-6/314452", element: <C314452 /> },
            { path: "sppu/2019-pattern/it/sem-6/314453", element: <C314453 /> },
            { path: "sppu/2019-pattern/it/sem-6/314454C", element: <C314454C /> },


      { path: "sppu/2019-pattern/it/sem-7", element: <ItSem7 />},
            { path: "sppu/2019-pattern/it/sem-7/414441", element: <C414441 /> },
            { path: "sppu/2019-pattern/it/sem-7/414442", element: <C414442 /> },
            { path: "sppu/2019-pattern/it/sem-7/414443", element: <C414443 /> },
            { path: "sppu/2019-pattern/it/sem-7/414444", element: <C414444 /> },
            { path: "sppu/2019-pattern/it/sem-7/414445", element: <C414445 /> },


      { path: "sppu/2019-pattern/it/sem-8", element: <ItSem8 />},
            { path: "sppu/2019-pattern/it/sem-8/414450", element: <C414450 /> },
            { path: "sppu/2019-pattern/it/sem-8/414451", element: <C414451 /> },
            { path: "sppu/2019-pattern/it/sem-8/414452", element: <C414452 /> },



      { path: "sppu/2019-pattern/aiml", element: <AIML />,},

      { path: "sppu/2019-pattern/aiml/sem-3", element: <AimlSem3 />},

      { path: "sppu/2019-pattern/aiml/sem-4", element: <AimlSem4 />},

      { path: "sppu/2019-pattern/aiml/sem-5", element: <AimlSem5 />},
            { path: "sppu/2019-pattern/aiml/sem-5/318541", element: <D318541 /> },
            { path: "sppu/2019-pattern/aiml/sem-5/318542", element: <D318542 /> },
            { path: "sppu/2019-pattern/aiml/sem-5/318543", element: <D318543 /> },
            { path: "sppu/2019-pattern/aiml/sem-5/3318544", element: <D3318544 /> },
            { path: "sppu/2019-pattern/aiml/sem-5/318545", element: <D318545 /> },

      
      { path: "sppu/2019-pattern/aiml/sem-6", element: <AimlSem6 />},

      { path: "sppu/2019-pattern/aiml/sem-7", element: <AimlSem7 />},
            { path: "sppu/2019-pattern/aiml/sem-7/418541", element: <D418541 /> },
            { path: "sppu/2019-pattern/aiml/sem-7/418542", element: <D418542 /> },
            { path: "sppu/2019-pattern/aiml/sem-7/418543", element: <D418543 /> },
            { path: "sppu/2019-pattern/aiml/sem-7/418544a", element: <D418544A /> },
            { path: "sppu/2019-pattern/aiml/sem-7/418545a", element: <D418545A /> },

      { path: "sppu/2019-pattern/aiml/sem-8", element: <AimlSem8 />},

      
      { path: "sppu/2024-pattern/fe", element: <FE24 />},

      { path: "sppu/2024-pattern/fe/Engineering-Physics", element: <PHY24 />},
      { path: "sppu/2024-pattern/fe/Engineering-Mathematics-I", element: <M124 />},
      { path: "sppu/2024-pattern/fe/Engineering-Chemistry", element: <CHE24 />},
      { path: "sppu/2024-pattern/fe/Basic-Electronics-Engineering", element: <BXE24 />},
      { path: "sppu/2024-pattern/fe/Basic-Electrical-Engineering", element: <BEE24 />},
      { path: "sppu/2024-pattern/fe/Engineering-Graphics", element: <GRA24 />},
      { path: "sppu/2024-pattern/fe/Engineering-Mechanics", element: <MEC24 />},
      { path: "sppu/2024-pattern/fe/Fundamentals-Of-Programming-Languages", element: <PPS24 />},


      
      
    ],
  },
];
