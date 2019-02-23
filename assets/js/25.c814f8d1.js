(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{209:function(e,t,o){"use strict";o.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=o(6),s=Object(r.a)(a,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[o("h1",{attrs:{id:"hadoop-hello-world"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-hello-world","aria-hidden":"true"}},[e._v("#")]),e._v(" Hadoop: Hello World")]),e._v(" "),o("p",[e._v("Hadoop is a set of tools of big-data storage (HDFS), computing (MapReduce) and resource management (Yarn)\nWell, the official document is long and quite user unfriendly. In order to deep dive it quicker, docker is the way to go.")]),e._v(" "),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),o("p",[e._v("The easiest way to run Hadoop right away on my Mac of course is using Docker. Assuming you have docker installed.")]),e._v(" "),o("p",[e._v("Here is a really good place "),o("a",{attrs:{href:"https://github.com/HariSekhon/Dockerfiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo https://github.com/HariSekhon/Dockerfiles"),o("OutboundLink")],1),e._v(" for many big-data Dockerfiles.")]),e._v(" "),o("ol",[o("li",[e._v("Clone it")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ git clone git@github.com:HariSekhon/Dockerfiles.git\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[o("code",[e._v("cd")]),e._v(" to "),o("code",[e._v("hadoop-dev")]),e._v(" (I assume it's for development purpose) folder and run")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ docker-compose up\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Checking the available ports... Emm.. so many of them.")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ docker ps\n\n0.0.0.0:8042->8042/tcp,\n8020/tcp,\n9000/tcp,\n0.0.0.0:8088->8088/tcp,\n0.0.0.0:19888->19888/tcp,\n0.0.0.0:50010->50010/tcp,\n0.0.0.0:50020->50020/tcp,\n0.0.0.0:50070->50070/tcp,\n0.0.0.0:50075->50075/tcp,\n10020/tcp,\n0.0.0.0:50090->50090/tcp\n")])])]),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Let's try to open them one by one from browser,")])]),e._v(" "),o("ul",[o("li",[e._v("8088: the cluster dashboard. There are status about Nodes, Applications, Conf, Scheduler.")]),e._v(" "),o("li",[e._v("8042: the a similar dashboard but for single node.")]),e._v(" "),o("li",[e._v("8020: Not working")]),e._v(" "),o("li",[e._v("9000: Not working")]),e._v(" "),o("li",[e._v("50010: Not working")]),e._v(" "),o("li",[e._v("50020: > It looks like you are making an HTTP request to a Hadoop IPC port. This is not the correct port for the web interface on this daemon.")]),e._v(" "),o("li",[e._v("50070: A much better looking UI for Datanodes, Snapshot, Startup Progress, Logs and even a File System Browser like "),o("code",[e._v("Finder")]),e._v(". This looks like the UI for HDFS.")]),e._v(" "),o("li",[e._v("50075: A similar UI as 50070 for single Datanode.")])]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("After peeking the dashboards. I didn't see the UI for adding data. Let's see how should we do it.")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://hadoop.apache.org/docs/r3.0.1/hadoop-project-dist/hadoop-common/FileSystemShell.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("File System Shell"),o("OutboundLink")],1),e._v(" listed many commands to interact with HDFS.")]),e._v(" "),o("p",[e._v("Attach the command line to the running container and run some Hadoop commands")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ docker exec -it hadoop-dev_hadoop-dev_1 /bin/bash\n\n$ hadoop fs -mkdir /helloworld\n$ hadoop fs -ls /\n")])])]),o("p",[e._v("check "),o("a",{attrs:{href:"http://locahost:50070/explorer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("File Browser"),o("OutboundLink")],1),e._v(", the "),o("code",[e._v("helloworld")]),e._v(" dir we just created  is showing in the list. Cool.")]),e._v(" "),o("p",[e._v("Let me put some data into it. I got some data set "),o("a",{attrs:{href:"https://ed-public-download.app.cloud.gov/downloads/Most-Recent-Cohorts-Scorecard-Elements.csv",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),o("OutboundLink")],1),e._v(" from "),o("a",{attrs:{href:"https://github.com/awesomedata/awesome-public-datasets",target:"_blank",rel:"noopener noreferrer"}},[e._v("this repo"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("In the container")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ curl https://ed-public-download.app.cloud.gov/downloads/Most-Recent-Cohorts-Scorecard-Elements.csv > Most-Recent-Cohorts-Scorecard-Elements.csv\n\n$ hadoop fs -put Most-Recent-Cohorts-Scorecard-Elements.csv /helloworld/input\n")])])]),o("p",[e._v("And now I can see and download this file in from File Browser too.")]),e._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[e._v("Let's do some MapReduce with my data now.")])]),e._v(" "),o("p",[e._v("Following the "),o("a",{attrs:{href:"https://hadoop.apache.org/docs/r3.0.1/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MapReduce Tutorial"),o("OutboundLink")],1),e._v(" here, the WordCount MapReducer.")]),e._v(" "),o("p",[e._v("Created the "),o("code",[e._v("WordCount.java")]),e._v(" file. Trying to compile it by following the steps in the doc but, well, the docker file I used doesn't have "),o("code",[e._v("${JAVA_HOME}/lib/tools.jar")]),e._v(".")]),e._v(" "),o("p",[e._v("An alternative way is")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("// returns me the hadoop libraries path\n$ hadoop classpath \n\n// to set it into the HADOOP_CLASSPATH\n$ export HADOOP_CLASSPATH=$(hadoop classpath)\n\n// will build to this folder\n$ mkdir build \n\n// compile the java file into build folder\n$ javac -cp $HADOOP_CLASSPATH WordCount.java -d build \n\n// created the JAR file from the built application\n$ jar -cvf wc.jar -C build/ .\n\n")])])]),o("p",[e._v("We created the WordCount jar file, now we cn run the WordCount MapReducer against our input data and output it.")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ hadoop jar wc.jar WordCount /helloworld/input /helloworld/output\n")])])]),o("p",[e._v("The job started running and finished with the counts. Coo!")]),e._v(" "),o("p",[e._v("We are done for the first step on Hadoop: installed it and ran the hello world.")])])},[],!1,null,null,null);s.options.__file="README.md";t.default=s.exports}}]);