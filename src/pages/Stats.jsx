import TasksList from "../components/TasksList";
import Cards from "../components/Cards";
import { useContext } from "react";
import { TaskListData } from "../store/TaskListData";
import { PieChart } from '@mui/x-charts/PieChart';
import LegendItem from "../components/LegendItem";


function Stats(){
    const {taskLists} = useContext(TaskListData)
    let total = taskLists.length
    let completed = taskLists.filter(t => t.status === 'completed').length
    let inProgress = taskLists.filter(t => t.status === 'in-progress').length
    let pending = taskLists.filter(t => t.status === 'pending').length

    const totalPct = taskLists.length || 1;
    const completedPct = (completed / totalPct) * 100;
    const inProgressPct = (inProgress / totalPct) * 100;
    const pendingPct = (pending / totalPct) * 100;

    return(
        <div style={{padding: '2% 4%'}}>
            <div style={{display: 'flex', justifyContent:"space-between", alignItems: 'center'}}>
                <Cards whichProject={'Total Projects'} count={total}></Cards>
                <Cards whichProject={'Completed Projects'} count={completed}></Cards>
                <Cards whichProject={'In Progress Projects'} count={inProgress}></Cards>
                <Cards whichProject={'Pending Projects'} count={pending}></Cards>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '50%'}}>
                    <TasksList divWidth = {'statsWidth'}></TasksList>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{width: '50%'}}>
                    <div style={{ position: 'relative', width: 300, height: 300 }}>
                        <PieChart
                            width={300}
                            height={300}
                            series={[
                                {
                                    innerRadius: 70,
                                    outerRadius: 120,
                                    cornerRadius: 8,
                                    data: [
                                        {
                                            id: 0,
                                            value: completedPct,
                                            label: 'Completed',
                                            color: '#2e7d32',
                                        },
                                        {
                                            id: 1,
                                            value: inProgressPct,
                                            label: 'In Progress',
                                            color: '#5ca660',
                                        },
                                        {
                                            id: 2,
                                            value: pendingPct,
                                            label: 'Pending',
                                            color: '#a5d6a7',
                                        },
                                    ],
                                },
                            ]}
                            slotProps={{
                                legend: {
                                    hidden: true ,
                                },
                            }}
                        />

                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none'}}>    
                            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#2e7d32' }}>
                                {Math.round(completedPct)}%
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                Completed
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 12 }}>
                        <LegendItem color="#2e7d32" label="Completed" />
                        <LegendItem color="#5ca660" label="In Progress" />
                        <LegendItem color="#a5d6a7" label="Pending" />
                    </div>
                </div>    
            </div>
        </div>
    )

}

export default Stats;