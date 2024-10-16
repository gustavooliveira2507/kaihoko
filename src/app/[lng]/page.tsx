import styles from "./page.module.scss";
import { useTranslation } from '../i18n/index'
import LineChart from "./components/LineChart";
import faker from 'faker'
import { PieChart } from "./components/PieChart";
import Card from "./components/Card";
import { CardType } from "@/interfaces/card_type";
import { IDashboardData } from "@/interfaces/dashboardData";
import { GetRequestByType,GetDashboardCards } from "../api/dashboard/route";
import { ICards } from "@/interfaces/cards";

interface Params {
  lng: string;
}

async function getRequestTypeData(): Promise<{data: IDashboardData[]}> {
  var res = await GetRequestByType();
  if(!res.ok) {
    throw new Error('Failed to fetch request type data');
  }
  return res.json(); 
}

async function getDashBoardCards(): Promise<{data: ICards[]}> {
  var res = await GetDashboardCards();
  if(!res.ok) {
    throw new Error('Failed to fetch request type data');
  }
  return res.json(); 
}

export default  async  function Home({ params }: { params: Params }) {
  const { t } = await useTranslation(params.lng, 'common')
/*
  const optionsRequestType = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('dashboard.requestByType.title')
      },
    },
  };
  const labels = [t('dashboard.requestByType.incident'), t('dashboard.requestByType.serviceRequest'),t('dashboard.requestByType.project'),t('dashboard.requestByType.planingTask')];
 
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


<div className={styles.cell}>
              <div className={styles.pieChart}>
                 <PieChart data={dataPie} options={options}/>  
              </div>
          </div>
          <div className={styles.cell}>
              <div className={styles.pieChart}>
                  <PieChart data={dataPie} options={options}/>  
              </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>
              <div className={styles.LineChart}>
                <LineChart data={data} options={options} />
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.LineChart}>
                <LineChart data={data} options={options} />
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.LineChart}>
                <LineChart data={data} options={options} />
              </div>
            </div>

   */
  
  const res = await getRequestTypeData();
  const dashData = new Array<IDashboardData>();
  if(res!=null){
    res.data.forEach((item) => {
      dashData.push({id:item.id, label:t(item.label), data:item.data, color:item.color, border:item.border});
    });
  }

  const cardsRequest = await getDashBoardCards();
  const cards = Array.from(cardsRequest.data).sort(() => 0.5 - Math.random()).slice(0,1);//.filter((element)=>element.userId=="5");
  const myTaskBackground = cards[0].myTask < 5 ? CardType.Success : cards[0].myTask >= 5 && cards[0].myTask < 10 ? CardType.Warning : CardType.Danger;
  const myQueueBackground = cards[0].queueRequest < 10 ? CardType.Success : cards[0].queueRequest >= 10 && cards[0].queueRequest < 20 ? CardType.Warning : CardType.Danger;
  const serviceLevelBackground = cards[0].serviceLevel >= 90 ? CardType.Success : cards[0].serviceLevel > 50 && cards[0].serviceLevel < 90 ? CardType.Warning : CardType.Danger;
  const cardInfo = {
    myTask: cards[0].myTask.toString(),
    taskBackGround: myTaskBackground,
    queueRequest: cards[0].queueRequest.toString(),
    queueBackGround: myQueueBackground,
    serviceLevel: cards[0].serviceLevel.toString(),
    serviceBackGround: serviceLevelBackground

  }
  return (    
    <div className={styles.page}>
      <main className={styles.main}>    
        <div className={styles.row}>
          <div className={styles.cell}>
            <div className={styles.card}>
              <Card title={t('dashboard.myTask')} data={cardInfo.myTask} imageUrl={"images/task_120291.svg"} type={cardInfo.taskBackGround}/>
            </div>
          </div>
          <div className={styles.cell}>
            <div className={styles.card}>
              <Card title={t('dashboard.queueRequest')} data={cardInfo.queueRequest} imageUrl={"images/people_queue_regular_icon_205081.svg"} type={cardInfo.queueBackGround}/>
            </div>
          </div>
          <div className={styles.cell}>
            <div className={styles.card}>
              <Card title={t('dashboard.serviceLevel')} data={cardInfo.serviceLevel} imageUrl={"images/emoji_happy_icon_152850.svg"} type={cardInfo.serviceBackGround}/>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>
            <div className={styles.pieChart}>
                <PieChart data={dashData} title={t('dashboard.requestByType.title')}   />  
            </div>
          </div>          
        </div>
      </main>      
    </div>
  );
}
