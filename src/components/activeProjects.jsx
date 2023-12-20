import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ColorRing, ThreeDots } from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';


export default function ActiveProjects() {
  let navigate = useNavigate()
  const [projects, setprojects] = useState([]),
    [count, setCount] = useState(0),
    [pageCount, setPageCount] = useState(0),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(false);
  const fetchData = async () => {
    setLoading(true); // Start loading

    let url = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem('authToken');
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        url + `/active_project?page_num_start=1&page_size=20`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data)
        if (data?.data?.projects.length > 0) {
          setCount(data.data.projectsCount / 10);
          setPageCount(data.data.projectsCount);
          setprojects(data.data.projects);
        } else {
          setError(true); // Set an error state if no data is available
        }
      } else {
        setError(true); // Set an error state if the response is not ok
      }
      setLoading(false); // Stop loading
    } catch (error) {
      setError(true); // Set an error state if an error occurs
      setLoading(false); // Stop loading
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [])

  const fetchPaginatedData = async (currentPage) => {
    let url = process.env.REACT_APP_BASE_URL;
    setLoading(true)
    const token = localStorage.getItem('authToken');
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(
      url +
      `/active_project?page_num_start=1&page_size=20`,
      requestOptions
    );
    const data = await res.json();
    setLoading(false)
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const dataFromServer = await fetchPaginatedData(currentPage);
    setprojects(dataFromServer?.data?.projects);
  };


  console.log(projects)

  return (
    // <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    < div>
      <div className='container'>
        <div className="about_projects">
          <div className="color_bg pb-3">

            {loading ? <div className="text-center loader_style">
              <ThreeDots
                height="100"
                width="120"
                radius="9"
                color="#000"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              />
            </div> : (
              (projects.length == 0) ?
                <div>
                  <div className="text-center">
                    <h3>No projects to show.</h3>
                  </div>
                </div> : (
                  <ul className="project_boxes">
                    {projects.map((item, index) => (
                      <li>
                        <div className="project_detail">
                          <div className="project_head">
                            <h2 className='cursor-pointer' onClick={() => { navigate(`/project-details/${item.id}/true`) }}>{item.project_name.length > 50 ? `${item.project_name.slice(0, 50)}...` : item.project_name} <span>Awarded on Oct 2, 2023</span></h2>
                          </div>
                          <p><strong>Project Description:</strong>{item.project_description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )
            )}

            {projects.length > 0 && <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={count}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"item-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"item-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"item-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"item-link"}
              activeClassName={"active"}
            />}


          </div>
          <div className="creat_btn text-center my-5">
            <a className="me-4" href="/find-a-project">Find a Project</a>
            <a href="/post-new-project">Post a Project</a>
          </div>
        </div>
      </div>
    </div>
  )
}
