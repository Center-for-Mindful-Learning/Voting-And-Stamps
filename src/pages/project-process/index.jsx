
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import MainLayout from '../../components/layout/MainLayout';
import { processActions } from "../../store/actions/processActions";
import { valuesActions } from "../../store/actions/valuesActions";
import { projectsActions } from "../../store/actions/projectsActions";
import { usersActions } from "../../store/actions/usersActions";
import { processTemplateActions } from "../../store/actions/processTemplateActions";
import CreateProcessList from '../../components/process-templates/create-process-list';
import ViewProcessList from "../../components/process-templates/view-process-content";
import CreatedTemplateSuccess from '../../components/process-templates/created-template-success';

const ProjectProcessList = (props) => {
    const [selectedId, setSelectedId] = useState("");
    const [selectedProcess, setSelectedProcess] = useState(null);
    const [processItem, setProcessItem] = useState({})
    const [selectedItemId, setSelectedItemId] = useState('');
    const [createDetails, setCreateDetails] = useState(false);
    const [processModal, setProcessModal] = useState(false);

    const router = useRouter();

    const dispatch = useDispatch();

    const {
        projectProcess: processList,
        updateStepVotesSuccess,
        saveProcessRequest,
        isSaveProcessSuccess
    } = useSelector(state => state.process);

    const {
        projectById,
    } = useSelector(state => state.projects);

    const {
        values: organizationValues
    } = useSelector(state => state.values);

    const {
        projectProcessTemplates
    } = useSelector(state => state.processTemplate);

    const {
        users
    } = useSelector((state) => state.users);


    useEffect(() => {
        // dispatch(processActions.getProcessRequest());
        dispatch(valuesActions.getValuesRequest());
        dispatch(usersActions.getUsersRequest());
    }, []);

    useEffect(() => {
        if (router.query?.id) {
            dispatch(projectsActions.getProjectByIdRequest(router.query?.id));
            dispatch(processTemplateActions.getProcessTemplateByProjectIdRequest(router.query?.id));
            dispatch(processActions.getProcessByProjectIdRequest(router.query?.id));
        }
    }, [router.query]);

    useEffect(() => {
        if (updateStepVotesSuccess && selectedProcess) {
            const currentProcess = processList.find((process) => process.id === selectedProcess.id);
            if (currentProcess) {
                setSelectedProcess(currentProcess);
            }
        }
    }, [updateStepVotesSuccess]);

    useEffect(() => {
        if (!saveProcessRequest && isSaveProcessSuccess) {
            nextProcess();
            dispatch(processActions.resetStatus());
        }
    }, [saveProcessRequest, isSaveProcessSuccess]);

    const deleteHandler = (id) => {
        dispatch(processActions.deleteProcessRequest(id))
    }


    const updateProcessStepVotes = (data) => {
        dispatch(processActions.updateStepVotesRequest(data));
    }

    const getProcessStepVotesCount = (currentSteps) => {
        let count = 0;
        currentSteps?.forEach(step => {
            if (step.votes && Object.keys(step.votes).length) {
                Object.keys(step.votes).forEach((key) => {
                    const currentVote = step.votes[key] ?? {};
                    count += (Number(currentVote.downVotes ?? 0) + Number(currentVote.upVotes ?? 0));
                })
            }
        });
        return count;
    }

    const getProcessStepProgress = (currentSteps) => {
        let progress = 0;
        const totalStepsCount = currentSteps?.length;
        const totalCompletedStepsCount = currentSteps?.filter(step => step.isCompleted).length;
        if (totalCompletedStepsCount) {
            console.log(totalStepsCount / totalStepsCount - totalCompletedStepsCount, totalStepsCount, totalCompletedStepsCount)
            const remainingStepsCount = totalStepsCount - totalCompletedStepsCount;
            progress = remainingStepsCount > 0 ? 100 - ((remainingStepsCount / totalStepsCount) * 100) : 100
        }
        return progress.toFixed(0);

    }

    const getProcessStatus = (currentSteps, dueDate) => {
        const completedSteps = currentSteps?.filter(step => step.isCompleted);
        const isDueDateOver = dayjs(dueDate).isBefore(dayjs());
        if (completedSteps?.length === currentSteps?.length) {
            return "Completed";
        }
        if (isDueDateOver && completedSteps?.length !== currentSteps?.length) {
            return "Over Due";
        }
        return "On Track";
    }

    const createProcessList = (item) => {
        setProcessItem(item);
        setCreateDetails(true);
        setProcessModal(false);
    }

    const deletePopupHandler = (selectedId) => {
        console.log(selectedId, selectedItemId, 'dd')
        if (selectedId === selectedItemId) {
            setSelectedItemId("");
            return;
        }
        setSelectedItemId(selectedId);
    }

    const deleteProcessTemplateHandler = (itemId) => {
        dispatch(processTemplateActions.deleteProcessTemplateRequest(itemId))
    }

    const handleCeateProcess = (processData) => {
        dispatch(processActions.saveProcessRequest(processData));
    }

    const createdModal = () => {
        setCreateDetails(false);
        setProcessModal(false);

    }

    const nextProcess = () => {
        setCreateDetails(false);
        setProcessModal(true);
    }

    console.log(projectById, processList, router.query, 'router.query?');

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Project Kelvin Widget</title>
                <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"
                    integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
                    rel="stylesheet" />
                <link rel="stylesheet" href="./assets/css/style.css" />
                <script src="/tailwind.js"></script>
            </head>
            <MainLayout>
                {createDetails || processModal ? null : !selectedProcess ?
                    <div className="flex w-full p-8 flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-3xl mb-8">{projectById?.title} Project</h1>
                        </div>

                        {/* <!-- Process Template section --> */}
                        {createDetails || processModal ? null : !!projectProcessTemplates?.length ? <>
                            <div className="flex flex-col mb-8">
                                <h4>Proccess Template List</h4>
                                <div className="flex  items-center">
                                    <h4 className="text-kelvinDark mb-1 text-md">Process Template
                                    </h4>
                                    <h4 className="text-kelvinDark mb-1 text-md" style={{ marginLeft: '190px' }}>Project
                                    </h4>
                                </div>
                                <div className="flex bg-kelvinLight p-4 rounded-md w-full flex-wrap">
                                    {projectProcessTemplates?.map((item, index) => {
                                        return (
                                            <div key={index}
                                                className="flex items-center w-full min-h-8 justify-between pl-4 py-1 bg-white shadow shadow-md rounded-md mb-2 ">
                                                <h6 className="mr-2 w-1/2">{item.name}</h6>
                                                <p className="text-sm opacity-50 mr-2 font-normal w-32" style={{ marginRight: '37%' }}>{item.project?.title}</p>
                                                <div className="flex items-center">
                                                    <button onClick={() => { createProcessList(item) }}
                                                        className="text-white bg-kelvinMedium hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-5 py- h-6 text-left w-44 text-center items-center mr-2"
                                                        data-modal-toggle="large-modal">
                                                        <i className="fa-solid fa-play text-white mt-1 mr-1 text-xs"></i>
                                                        Create Process</button>
                                                    <Link
                                                        href={{
                                                            pathname: "/update-process-template",
                                                            query: {
                                                                data: JSON.stringify(item)
                                                            }, // the data
                                                            state: {
                                                                processTemplate: item
                                                            }
                                                        }}>
                                                        <button
                                                            className="text-white bg-kelvinMedium hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-5 py- h-6 text-left w-20 text-center "
                                                            data-modal-toggle="large-modal">
                                                            Edit</button>
                                                    </Link>
                                                    <a href="#" className=" px-4 hover:bg-kelvinLight rounded-full" onClick={() => { deletePopupHandler(item.id) }}>
                                                        <i className="fa-solid fa-ellipsis-vertical mt-1 text-xl"></i>

                                                    </a>
                                                    {item.id === selectedItemId ? <button onClick={() => { deleteProcessTemplateHandler(item.id) }} className=" bg-kelvinMedium hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-2  h-6 text-left mr-2 w-24 text-center ">delete</button> : null}
                                                </div>
                                            </div>
                                        )
                                    })
                                    }

                                </div>
                            </div>
                        </> :
                            <div>No Process Template Found</div>
                        }

                        {/* <!-- Process section --> */}

                        {createDetails || processModal ? null : !!processList?.length ?
                            <>
                                <div className="flex flex-col mb-8">

                                    <h4>Proccess List</h4>
                                    <div className="flex  py-1 pl-4 w-full items-center justify-between">
                                        <h4 className="mb-1 mr-5 text-md">Process
                                        </h4>
                                        <h4 className="mb-1 mx-5 text-md">Process Template
                                        </h4>
                                        <h4 className="mb-1 mx-5 text-md">Due by
                                        </h4>
                                        <h4 className="mb-1 mx-5 text-md">Assignees
                                        </h4>
                                        <h4 className="mb-1  text-md">Progress
                                        </h4>
                                    </div>
                                    <div className="flex bg-kelvinLight p-4 rounded-md w-full flex-wrap ">
                                        {processList?.map((item) => {
                                            return (
                                                <>
                                                    {/* <Link 
                                         key={item._id}  
                                         href={{
                                                pathname: "/research-model",
                                                query: {templateId:`${item.processTemplateId}`,processName:`${item.name}`,assignees:`${item.userId}`}, // the data
                                            }}
                                        > */}
                                                    <div
                                                        key={item.id}
                                                        className="flex items-center w-full min-h-8 justify-between pl-4 py-1 bg-white shadow shadow-md rounded-md mb-2 "
                                                        onClick={() => setSelectedProcess(item)}
                                                    >
                                                        <h6 className="mr-2 items-center"> {item.process || item.name}</h6>
                                                        <h6 className="mr-2 text-black/50 items-center">{item.processTemplate || item.processTemplateName}</h6>
                                                        <p className="text-sm opacity-50 mr-2 font-normal items-center">by {item.dueDate ? dayjs(item.dueDate).format("MMM DD, YYYY") : ''}</p>
                                                        <p className="text-sm opacity-50 mr-2 font-normal items-center">{item.assignees || item?.user?.name}</p>
                                                        <div className="flex flex-col">
                                                            <div className="mb-1 text-xs text-black/50 items-center" style={{ textAlign: 'center' }}>{getProcessStepProgress(item.steps)}%</div>
                                                            <div className="w-32 bg-gray-400 rounded-full h-1.5 items-center">
                                                                <div className=" h-1.5 rounded-full " style={{ width: `${item.progress}`, background: "#6cef6c" }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex">

                                                            <button
                                                                //onClick={()=>{ontrackModal(item.id)}}
                                                                className=" bg-kelvinMedium hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-2  h-6 text-left mr-2 w-24 text-center "
                                                                data-modal-toggle="large-modal">
                                                                {getProcessStatus(item.steps, item.dueDate)}
                                                            </button>


                                                            <p style={{ lineHeight: '10px', textAlign: 'center' }}><span style={{ fontSize: '20px' }} >{getProcessStepVotesCount(item.steps)}</span><br /><span style={{ fontSize: '10px' }}>Votes</span></p>
                                                            <span href="#" className=" px-4 hover:bg-kelvinLight rounded-full"
                                                                onClick={(event) => {
                                                                    event.stopPropagation();
                                                                    setSelectedId(id => id === item.id ? "" : item.id)
                                                                }
                                                                } >
                                                                <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                                                            </span>
                                                            {item.id === selectedId ? <button onClick={() => { deleteHandler(item.id) }}>delete</button> : null}
                                                        </div>
                                                    </div>
                                                    {/* </Link> */}
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </> :
                            <div style={{ textAlign: 'center' }}>No Process Found</div>
                        }


                    </div>
                    :
                    <ViewProcessList
                        processItem={selectedProcess}
                        organizationValues={organizationValues}
                        updateProcessStepVotes={updateProcessStepVotes}
                        isStepVoteUpdated={updateStepVotesSuccess}
                        resetProcessRequestStatus={() => dispatch(processActions.resetStatus())}
                        onCloseModal={() => setSelectedProcess(null)}
                    />

                }
                {createDetails &&
                    <CreateProcessList
                        users={users}
                        processItem={processItem}
                        onCloseModal={() => setCreateDetails(false)}
                        handleCeateProcess={handleCeateProcess}
                    />}
                {processModal && <CreatedTemplateSuccess createdModal={createdModal} />}
            </MainLayout>
        </>
    )
}
export default ProjectProcessList;