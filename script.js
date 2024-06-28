// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

    document.addEventListener('DOMContentLoaded', function() {
        const design = document.getElementById('design');
        const project = document.getElementById('project');
        const execution = document.getElementById('execution');
        const mainImage = document.getElementById('main-image');
        const description = document.getElementById('description');
    
        function updateActiveSpan(clickedElement, newSrc, newText) {
            // Remove 'active' class from all spans
            document.querySelectorAll('.clickable').forEach(element => {
                element.classList.remove('active');
            });
            
            // Add 'active' class to the clicked span
            clickedElement.classList.add('active');
            
            // Update the image source
            mainImage.src = newSrc;
            
            // Update the description text
            description.textContent = newText;
        }
    
        design.addEventListener('click', function() {
            updateActiveSpan(design, 'design.png', 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.');
        });
    
        project.addEventListener('click', function() {
            updateActiveSpan(project, 'elem3.png', 'Our project team ensures that all aspects of the project are executed seamlessly. We manage timelines, resources, and communication to deliver a successful project that meets client expectations.');
        });
    
        execution.addEventListener('click', function() {
            updateActiveSpan(execution, 'Execution.png', 'Execution is where plans become reality. Our execution team ensures that the final product is built to specifications, maintaining the highest standards of quality and craftsmanship.');
        });
    });
    