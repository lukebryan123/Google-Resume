This is a planning sheet for creating the new react resume. 
I started off this week refreshing on how to create a react app and getting used to the basics
By the end of week one I've begun moving the old 'Google' Resume to React.

So up here and out of the way, I want to make a list of contacts who I'd look to share my resume with, as well as places I'd like to apply.
People:
- Stephanie Acker
- Marc Nascarella
- Jonathan Buenocore (at BU)
- Henry
- Ashley Holmes (who I apparently met last year and worked for JSI/DPH?)
- Dr. Landrigan (of course)
Places:
- MDPH
- RIDH
- PIH
- JSI
- Mathematica
- ClimaWATCH
- MGGG

- X By tomorrow, I'd like to see if I can have the whole old thing moved
It doesn't need to be stylistically perfect, but I should
- X Have all the content that was originally there
- X create a bug list 
- X start to add improvement plans to this list
- X revamp old resume/plan new one
- - X and particularly think about new projects to put on the resume
- maybe start the basic of said improvements

Current Bug list
- RHS on wide screen
- links are flaky/need titles
- class/className differences
- cutoff at the bottom?
- console warnings

Enhancement list
- multiple tabs/pages
- - can I do a google maps Iframe?
- move all "results" to separate components
- - Going to have to create a service to store the data
- - create keywords
- search bar functional
- - first steps of changing input
- - need a 'search algorithm' on results service (see above)
- tab navigable
- drop down menus on the top right?
- make a pagination system? (not super minor)

Later Bug List
- check Addtional Details mobile is formatted right

To Do:
- X Make a results component
- - X read tags out of resultsJson.body
- - X "See also"s
- X add all previous data
- X add titles to results/links
- X confirm all links work/go to right spot
- X bottom logo

- create classes for ResultsData
- X create search algorithm
- - X create function that reads results data and outputs an ordered version
- - X add keywords
- - X be able to type into search
- - X call function on 'search'
- - X write rules to 'score' search word
- - X write rules to 'score' search phrase
- - search button