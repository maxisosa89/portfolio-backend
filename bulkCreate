const { Project, Tech } = require('./src/db.js');

module.exports = async function createInfo() {
    const teches = [{
        techTitle: 'JavaScript',
        techImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        techTitle: 'React',
        techImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
    },
    {
        techTitle: 'NodeJs',
        techImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
    },
    {
        techTitle: 'Sequelize',
        techImg: 'https://i.blogs.es/91493f/sequelize/1366_2000.png'
    }]
    const techesValidate = await Tech.findAll();
    techesValidate.length === 0 &&
    await Tech.bulkCreate(teches)

    const projects = [
        {
            projectTitle: 'Project1',
            projectImg: [
                'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
                'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
                'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg',
                'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png',
                'https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg'
            ],
            projectSummary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti tenetur est quo, reiciendis, possimus provident voluptatum saepe rem quibusdam debitis officiis nesciunt! Facilis quasi impedit reiciendis quibusdam accusantium! Ipsam unde officiis dolorum laboriosam sapiente culpa repellendus asperiores, perferendis reiciendis, ut voluptate ad. Quisquam veritatis, recusandae ad repudiandae eligendi maxime?',
            projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum excepturi nesciunt culpa fugit, quia exercitationem itaque deleniti architecto rerum laborum vero aspernatur alias magnam aliquam ab, cumque quis in nostrum autem expedita repellendus nobis quas illo? Pariatur quos totam facilis fugit dolore reprehenderit tempora delectus laudantium hic. Ab ullam nisi recusandae blanditiis nesciunt error, et consectetur tenetur nobis fugiat quae illum libero velit architecto explicabo quam dolor debitis facilis dignissimos consequatur. Incidunt consequuntur alias labore vero ducimus reprehenderit impedit ipsum magni consequatur itaque iste quos provident, harum excepturi odio tenetur et? Facere dolores corporis est eos cum eius. Officiis.',
            siteUrl: 'https://github.com/maxisosa89',
            frontUrl: 'https://github.com/maxisosa89/portfolio-fronted',
            backUrl: 'https://github.com/maxisosa89/portfolio-backend',
            techs: ['JavaScript', 'React', 'NodeJs', 'Sequelize']
        },
        {
            projectTitle: 'Project2',
            projectImg: [
                'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
                'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
                'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg',
                'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png',
                'https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg'
            ],
            projectSummary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti tenetur est quo, reiciendis, possimus provident voluptatum saepe rem quibusdam debitis officiis nesciunt! Facilis quasi impedit reiciendis quibusdam accusantium! Ipsam unde officiis dolorum laboriosam sapiente culpa repellendus asperiores, perferendis reiciendis, ut voluptate ad. Quisquam veritatis, recusandae ad repudiandae eligendi maxime?',
            projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum excepturi nesciunt culpa fugit, quia exercitationem itaque deleniti architecto rerum laborum vero aspernatur alias magnam aliquam ab, cumque quis in nostrum autem expedita repellendus nobis quas illo? Pariatur quos totam facilis fugit dolore reprehenderit tempora delectus laudantium hic. Ab ullam nisi recusandae blanditiis nesciunt error, et consectetur tenetur nobis fugiat quae illum libero velit architecto explicabo quam dolor debitis facilis dignissimos consequatur. Incidunt consequuntur alias labore vero ducimus reprehenderit impedit ipsum magni consequatur itaque iste quos provident, harum excepturi odio tenetur et? Facere dolores corporis est eos cum eius. Officiis.',
            siteUrl: 'https://github.com/maxisosa89',
            frontUrl: 'https://github.com/maxisosa89/portfolio-fronted',
            backUrl: 'https://github.com/maxisosa89/portfolio-backend',
            techs: ['JavaScript', 'NodeJs', 'Sequelize']
        },
        {
            projectTitle: 'Project3',
            projectImg: [
                'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
                'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
                'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg',
                'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png',
                'https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg'
            ],
            projectSummary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti tenetur est quo, reiciendis, possimus provident voluptatum saepe rem quibusdam debitis officiis nesciunt! Facilis quasi impedit reiciendis quibusdam accusantium! Ipsam unde officiis dolorum laboriosam sapiente culpa repellendus asperiores, perferendis reiciendis, ut voluptate ad. Quisquam veritatis, recusandae ad repudiandae eligendi maxime?',
            projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum excepturi nesciunt culpa fugit, quia exercitationem itaque deleniti architecto rerum laborum vero aspernatur alias magnam aliquam ab, cumque quis in nostrum autem expedita repellendus nobis quas illo? Pariatur quos totam facilis fugit dolore reprehenderit tempora delectus laudantium hic. Ab ullam nisi recusandae blanditiis nesciunt error, et consectetur tenetur nobis fugiat quae illum libero velit architecto explicabo quam dolor debitis facilis dignissimos consequatur. Incidunt consequuntur alias labore vero ducimus reprehenderit impedit ipsum magni consequatur itaque iste quos provident, harum excepturi odio tenetur et? Facere dolores corporis est eos cum eius. Officiis.',
            siteUrl: 'https://github.com/maxisosa89',
            frontUrl: 'https://github.com/maxisosa89/portfolio-fronted',
            backUrl: 'https://github.com/maxisosa89/portfolio-backend',
            techs: ['JavaScript']
        },
        {
            projectTitle: 'Project4',
            projectImg: [
                'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
                'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
                'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg',
                'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png',
                'https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg'
            ],
            projectSummary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti tenetur est quo, reiciendis, possimus provident voluptatum saepe rem quibusdam debitis officiis nesciunt! Facilis quasi impedit reiciendis quibusdam accusantium! Ipsam unde officiis dolorum laboriosam sapiente culpa repellendus asperiores, perferendis reiciendis, ut voluptate ad. Quisquam veritatis, recusandae ad repudiandae eligendi maxime?',
            projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum excepturi nesciunt culpa fugit, quia exercitationem itaque deleniti architecto rerum laborum vero aspernatur alias magnam aliquam ab, cumque quis in nostrum autem expedita repellendus nobis quas illo? Pariatur quos totam facilis fugit dolore reprehenderit tempora delectus laudantium hic. Ab ullam nisi recusandae blanditiis nesciunt error, et consectetur tenetur nobis fugiat quae illum libero velit architecto explicabo quam dolor debitis facilis dignissimos consequatur. Incidunt consequuntur alias labore vero ducimus reprehenderit impedit ipsum magni consequatur itaque iste quos provident, harum excepturi odio tenetur et? Facere dolores corporis est eos cum eius. Officiis.',
            siteUrl: 'https://github.com/maxisosa89',
            frontUrl: 'https://github.com/maxisosa89/portfolio-fronted',
            backUrl: 'https://github.com/maxisosa89/portfolio-backend',
            techs: ['NodeJs', 'Sequelize']
        },
        {
            projectTitle: 'Project5',
            projectImg: [
                'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
                'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
                'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg',
                'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png',
                'https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg'
            ],
            projectSummary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti tenetur est quo, reiciendis, possimus provident voluptatum saepe rem quibusdam debitis officiis nesciunt! Facilis quasi impedit reiciendis quibusdam accusantium! Ipsam unde officiis dolorum laboriosam sapiente culpa repellendus asperiores, perferendis reiciendis, ut voluptate ad. Quisquam veritatis, recusandae ad repudiandae eligendi maxime?',
            projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum excepturi nesciunt culpa fugit, quia exercitationem itaque deleniti architecto rerum laborum vero aspernatur alias magnam aliquam ab, cumque quis in nostrum autem expedita repellendus nobis quas illo? Pariatur quos totam facilis fugit dolore reprehenderit tempora delectus laudantium hic. Ab ullam nisi recusandae blanditiis nesciunt error, et consectetur tenetur nobis fugiat quae illum libero velit architecto explicabo quam dolor debitis facilis dignissimos consequatur. Incidunt consequuntur alias labore vero ducimus reprehenderit impedit ipsum magni consequatur itaque iste quos provident, harum excepturi odio tenetur et? Facere dolores corporis est eos cum eius. Officiis.',
            siteUrl: 'https://github.com/maxisosa89',
            frontUrl: 'https://github.com/maxisosa89/portfolio-fronted',
            backUrl: 'https://github.com/maxisosa89/portfolio-backend',
            techs: ['JavaScript', 'React', 'NodeJs', 'Sequelize']
        },
        {
            projectTitle: 'Project6',
            projectImg: [
                'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
                'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
                'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg',
                'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png',
                'https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg'
            ],
            projectSummary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti tenetur est quo, reiciendis, possimus provident voluptatum saepe rem quibusdam debitis officiis nesciunt! Facilis quasi impedit reiciendis quibusdam accusantium! Ipsam unde officiis dolorum laboriosam sapiente culpa repellendus asperiores, perferendis reiciendis, ut voluptate ad. Quisquam veritatis, recusandae ad repudiandae eligendi maxime?',
            projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum excepturi nesciunt culpa fugit, quia exercitationem itaque deleniti architecto rerum laborum vero aspernatur alias magnam aliquam ab, cumque quis in nostrum autem expedita repellendus nobis quas illo? Pariatur quos totam facilis fugit dolore reprehenderit tempora delectus laudantium hic. Ab ullam nisi recusandae blanditiis nesciunt error, et consectetur tenetur nobis fugiat quae illum libero velit architecto explicabo quam dolor debitis facilis dignissimos consequatur. Incidunt consequuntur alias labore vero ducimus reprehenderit impedit ipsum magni consequatur itaque iste quos provident, harum excepturi odio tenetur et? Facere dolores corporis est eos cum eius. Officiis.',
            siteUrl: 'https://github.com/maxisosa89',
            frontUrl: 'https://github.com/maxisosa89/portfolio-fronted',
            backUrl: 'https://github.com/maxisosa89/portfolio-backend',
            techs: ['JavaScript', 'Sequelize']
        }
    ]
    const projectsValidate = await Project.findAll();
    projectsValidate.length === 0 &&
    await Project.bulkCreate(projects).then().catch(err => console.log(err))
    projects.map(async (e) => {
      const proj = await Project.findOne({
        where: {
          projectTitle: e.projectTitle
        }
      })
      e.techs.map(async (tech) => {
        const techDb = await Tech.findOne({
          where: {
            techTitle: tech
          }
        })
        proj.addTech(techDb)
      })
    })
}