import React from 'react';

const Detail = (props) => {

    //TODO: make this dependent on the props passed in?


   return (
    <>
    <head>
    <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Project Kelvin Widget</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"
        integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
        rel="stylesheet" />
    <link rel="stylesheet" href="./assets/css/style.css"/>

</head>

<body>
    <div className="tabs ">
        <ul
            className=" text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full">
                <a href="#"
                    className="inline-block p-4 w-full text-lg text-white bg-kelvinDark rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-kelvinDark dark:text-white"
                    aria-current="page">Voting</a>
            </li>
            <li className="w-full">
                <a href="#"
                    className="inline-block p-4 w-full text-lg bg-kelvinMedium text-white rounded-r-lg hover:text-white hover:bg-kelvinDark focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-kelvinMedium dark:hover:bg-kelvinDark">Impact</a>
            </li>
        </ul>

    </div>
    <div className="flex flex-col ">
        <div className="flex px-10 mt-10 mb-4 items-center">
            <i className="fa-solid text-kelvinDark mr-6 fa-chevron-left text-3xl"></i>
            <h1 className="text-3xl font-medium">Voting for Step - <span className="text-kelvinDark">Start Research</span></h1>
        </div>
        <div className="px-10 my-4">

            <form>
                <label htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-kelvinLight rounded-lg border-2 border-gray-300 focus:ring-kelvinMedium focus:border-kelvinMedium dark:bg-kelvinLight dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-kelvinMedium dark:focus:border-kelvinMedium"
                        placeholder="Search Mockups, Logos..." required/>
                    <button type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-kelvinMedium hover:bg-kelvinDark focus:ring-4 focus:outline-none focus:ring-kelvinMedium font-medium rounded-lg text-sm px-4 py-2 dark:bg-kelvinMedium dark:hover:bg-kelvinDark dark:focus:ring-blue-800"
                        onClick={
                            () => {return;} //TODO: search for content filtered by the search input; redirect to a results page
                        }>Search</button>
                </div>
            </form>

        </div>
        <div className="flex flex-col px-10">
            <div className="flex shadow shadow-md rounded-md py-4 px-6 my-2 items-center justify-between">
                <div className="flex">
                    <div className="flex flex-col justify-start items-start mr-2">
                        <i className="fa-solid text-kelvinDark mr-2 fa-rocket text-xl"></i>
                    </div>
                    <div className="mr-8">
                        <h6 className="leading-none mb-2 ">Modern</h6>
                        <p className="text-gray-400">Short description of value here accommodates two lines</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex">
                        <p className="text-kelvinDark bg-kelvinLight px-3 py-2  font-bold rounded">32</p>
                    </div>
                    <div className="flex my-4">
                        <button type="button"
                            className="focus:outline-none text-white bg-kelvinDark hover:bg-kelvinBold focus:ring-4 focus:ring-kelvinDark font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-kelvinDark dark:hover:bg-kelvinBold dark:focus:ring-kelvinDark"><i
                                className="fa-solid text-white fa-thumbs-up"
                                onClick={() => {return;}}></i></button>
                        <label htmlFor="" className="p-2 mx-2 font-medium text-lg">5</label>
                        <button type="button"
                            className="focus:outline-none text-white bg-kelvinDark hover:bg-kelvinBold focus:ring-4 focus:ring-kelvinDark font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-kelvinDark dark:hover:bg-kelvinBold dark:focus:ring-kelvinDark"><i
                                className="fa-solid text-white fa-thumbs-down"
                                onClick={() => {return;} //TODO: have these buttons update running variables tracking votes; potentially abstract away their function
                                  }></i></button> /
                    </div>
                </div>
            </div>
            <div className="flex shadow shadow-md rounded-md py-4 px-6 my-2 items-center justify-between">
                <div className="flex">
                    <div className="flex flex-col justify-start items-start mr-2">
                        <i className="fa-solid text-kelvinDark mr-2 fa-rocket text-xl"></i>
                    </div>
                    <div className="mr-8">
                        <h6 className="leading-none mb-2 ">Modern</h6>
                        <p className="text-gray-400">Short description of value here accommodates two lines</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex">
                        <p className="text-kelvinDark bg-kelvinLight px-3 py-2  font-bold rounded">32</p>
                    </div>
                    <div className="flex my-4">
                        <button type="button"
                            className="focus:outline-none text-white bg-kelvinDark hover:bg-kelvinBold focus:ring-4 focus:ring-kelvinDark font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-kelvinDark dark:hover:bg-kelvinBold dark:focus:ring-kelvinDark"><i
                                className="fa-solid text-white fa-thumbs-up"></i></button>
                        <label htmlFor="" className="p-2 mx-2 font-medium text-lg">5</label>
                        <button type="button"
                            className="focus:outline-none text-white bg-kelvinDark hover:bg-kelvinBold focus:ring-4 focus:ring-kelvinDark font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-kelvinDark dark:hover:bg-kelvinBold dark:focus:ring-kelvinDark"><i
                                className="fa-solid text-white fa-thumbs-down"></i></button>
                    </div>
                </div>
            </div>
            <div className="flex shadow shadow-md rounded-md py-4 px-6 my-2 items-center justify-between">
                <div className="flex">
                    <div className="flex flex-col justify-start items-start mr-2">
                        <i className="fa-solid text-kelvinDark mr-2 fa-rocket text-xl"></i>
                    </div>
                    <div className="mr-8">
                        <h6 className="leading-none mb-2 ">Modern</h6>
                        <p className="text-gray-400">Short description of value here accommodates two lines</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex">
                        <p className="text-kelvinDark bg-kelvinLight px-3 py-2  font-bold rounded">32</p>
                    </div>
                    <div className="flex my-4">
                        <button type="button"
                            className="focus:outline-none text-white bg-kelvinDark hover:bg-kelvinBold focus:ring-4 focus:ring-kelvinDark font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-kelvinDark dark:hover:bg-kelvinBold dark:focus:ring-kelvinDark"><i
                                className="fa-solid text-white fa-thumbs-up"></i></button>
                        <label htmlFor="" className="p-2 mx-2 font-medium text-lg">5</label>
                        <button type="button"
                            className="focus:outline-none text-white bg-kelvinDark hover:bg-kelvinBold focus:ring-4 focus:ring-kelvinDark font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-kelvinDark dark:hover:bg-kelvinBold dark:focus:ring-kelvinDark"><i
                                className="fa-solid text-white fa-thumbs-down"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex px-10 mt-4">
            <button type="button"
                className="text-white bg-gradient-to-r from-kelvinDark  to-kelvinBold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-36"
                onClick={() => {return;} //TODO: save current votes to the database
                }>Save</button>
        </div>
    </div>
</body>
</>
   );
};

export default Detail;