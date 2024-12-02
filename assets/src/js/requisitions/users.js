export const findProfessor = async (id) => {
    try {

        const response = await fetch("http://localhost:8081/professor/"+id+"/find",{
            credentials: 'include'
        });

        const result = await response.json();
        const professor = result.data;
        console.log("Professor: ", professor);
        return professor;

    } catch (error) {

    }
};

export const listProfessor = async () => {
  try {
    const response = await fetch("http://localhost:8081/professor/list",{
        credentials: "include",
    });

    const result = await response.json();
    const professor = result.data;
    console.log("Professor: ", professor);
    return professor;
  } catch (error) {}
};