import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  .articles {
    text-align: left;
  }
  .articles li {
    list-style: none;
  }
`;
class PersonalBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediumArticles: [],
      dataIsLoading: true
    };
  }
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rahulrana95"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          mediumArticles: data.items,
          dataIsLoading: false
        });
      })
      .catch(() => {
        this.setState({
          dataIsLoading: false,
          error: true,
          errorMessage: "Something wrong. Please refresh the page."
        });
      });
    //     feed: {url: "https://medium.com/feed/@rahulrana95", title: "Stories by Rahul Rana on Medium", link: "https://medium.com/@rahulrana95?source=rss-24252af393c4------2", author: "", description: "Stories by Rahul Rana on Medium", …}
    // items: Array(1)
    // 0:
    // author: "Rahul Rana"
    // categories: (5) ["continous-deployment", "ci-cd-pipeline", "pipeline", "continous-integration", "deployment"]
    // content: "↵<h3>CI/CD with Travis CI — Beginner Guide</h3>↵<p>I am setting up my personal project. This time while thinking about development I thought to try CI/CD, it seems a bit complex, but trust me it’s not.</p>↵<p>The first question that you must be thinking (if you haven’t heard it before or don’t know anything about it)</p>↵<blockquote>↵<strong>What is CI/CD (Continous integration and Continous deployment) </strong><em>🤔</em><strong> ?</strong>↵</blockquote>↵<p>CI/CD helps in testing and deploying small features incrementally rather than big features or big changes in code. It helps to easily test small changes and can be deployed trustfully with full confidence.</p>↵<p>Now you know what is CI/CD and one of its benefits.</p>↵<p><em>I will share my experience of setting up the Travis ci with my code repo and running tests on each pull request.</em></p>↵<ol><li>First, make sure you have a GitHub account. Now go to marketplace GitHub and search Travis ci, when you open the app you see something like this.</li></ol>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*wR2_IPVSSiBU4GwtXbKg3Q.png"></figure><p>Click on setup a new plan, choose free or paid, for personal projects free will work, install this in your repo.</p>↵<p>2. Now if you go to your Travis CI dashboard you see your repo there.</p>↵<p>3. Add a .travis.yml file in your project.</p>↵<p>4. The default branch is master branch</p>↵<p>5. just commit `.travis.yml`file with minimal config</p>↵<pre>language: node_js // just put any langugae yoy want</pre>↵<pre>node_js:</pre>↵<pre>- node</pre>↵<pre>script:</pre>↵<pre>- npm run build</pre>↵<pre>cache:</pre>↵<pre>yarn: true</pre>↵<pre>directories:</pre>↵<pre>- node_modules</pre>↵<pre>branches:</pre>↵<pre>  only:</pre>↵<pre>    - master</pre>↵<p>6. Make sure you enable these</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*y9lyVBWJ01ZXweJaYLemQw.png"></figure><p>enable the Build pushed branches and pull request</p>↵<p>7. Whenever you make any Commit to master, ci/cd pipeline will run automatically</p>↵<p>8. You can see the icon in front of pull request if it succeeds or not.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/896/1*XGhvz7AsIs_RU-RbYCg9jQ.png"></figure><p>For Continous deployment</p>↵<ol>↵<li>I have used AWS S3 bucket.</li>↵<li>Just get access key and secret key for IAM user on AWS</li>↵<li>store in env variables</li>↵</ol>↵<p>Use this for deploy to s3 and you are good to go.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/414/1*Y5mclInqLwkTBVqatgUI-g.png"></figure><blockquote><strong>Don’t want to merge the pull request if build fails ?</strong></blockquote>↵<p>Just enable the following checks from your repo settings branch section.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*_yJCw86mTmZGrKXT2xrAqQ.png"></figure><p>You are good to go now.</p>↵<p>There are a lot more things that you can do with Travis CI</p>↵<blockquote><strong>Let’s go with some of the concepts</strong></blockquote>↵<ol>↵<li>Following terms are used quite frequently in Travis ci.<br>a. Phase: There can be different phases like before install, scripts before deploy<br>b. Job: Job is something to carry a fix task<br>c. Build: build consists of multiple no. of jobs if they are an exit with zero exit code then it will be success else it will fail</li>↵<li>Its infrastructure supports two types of OS i.e Linux and MacOs.<br>Linux has 3 different versions i.e Xenial, Trusty 14.04, 12.04.<br>With dist key you can specify the version.<br>Use os key for mentioning os type. <br>The default is set to Ubuntu.</li>↵<li>It supports the only GitHub.</li>↵<li>You can deploy to multiple platforms with Travis like GitHub pages, Heroku, ruby notif etc. Check the documentation for more platforms.</li>↵<li>The build has some timeouts also. For more info read this</li>↵<li>You can limit the concurrent number of jobs</li>↵<li>If you want to run build only on latest commits not on every commit than you can select from repo settings on Travis ci. Here when builds are in the queue and some new commit pushed and their job needs to run than the previous build from the queue will be canceled.</li>↵<li>You can include and exclude branches also.</li>↵</ol>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/436/1*JOHV3Pc0rdJDtVfQUB2jBw.png"></figure><p>9. You can have a safe list and block list of branches also<br>in such cases, priority is of safelist first.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*PteXaoxlMZTXAsJ1kzNImQ.png"></figure><p>10. Just remember .travis.yml file need to be present on active branches</p>↵<p>11. You can use matrix too in the config file.<br>if you separate builds in the matrix to run things in different virtual environments. This is beneficial when you want to run different tests in parallel for example integrations tests, unit tests, snapshot testing.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*vDYWt-a7khY0PZWp49ugfw.png"></figure><p>12. You can run on pull requests too that will be really awesome. If PR builds failed then you can not merge.</p>↵<p><em>Hey, We have covered all the basics of CI/CD. It’s very easy. Go right now and test yourself. 🙌 👐</em></p>↵<p>It’s my first post on medium. Thanks for reading.</p>↵<p>Find me on <a href="https://www.linkedin.com/in/rahul-rana-b713499a/">Linkedin</a> <a href="https://twitter.com/rahulrana_95">Twitter</a></p>↵<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=77c6a6a4ecb8" width="1" height="1">↵"
    // description: "↵<h3>CI/CD with Travis CI — Beginner Guide</h3>↵<p>I am setting up my personal project. This time while thinking about development I thought to try CI/CD, it seems a bit complex, but trust me it’s not.</p>↵<p>The first question that you must be thinking (if you haven’t heard it before or don’t know anything about it)</p>↵<blockquote>↵<strong>What is CI/CD (Continous integration and Continous deployment) </strong><em>🤔</em><strong> ?</strong>↵</blockquote>↵<p>CI/CD helps in testing and deploying small features incrementally rather than big features or big changes in code. It helps to easily test small changes and can be deployed trustfully with full confidence.</p>↵<p>Now you know what is CI/CD and one of its benefits.</p>↵<p><em>I will share my experience of setting up the Travis ci with my code repo and running tests on each pull request.</em></p>↵<ol><li>First, make sure you have a GitHub account. Now go to marketplace GitHub and search Travis ci, when you open the app you see something like this.</li></ol>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*wR2_IPVSSiBU4GwtXbKg3Q.png"></figure><p>Click on setup a new plan, choose free or paid, for personal projects free will work, install this in your repo.</p>↵<p>2. Now if you go to your Travis CI dashboard you see your repo there.</p>↵<p>3. Add a .travis.yml file in your project.</p>↵<p>4. The default branch is master branch</p>↵<p>5. just commit `.travis.yml`file with minimal config</p>↵<pre>language: node_js // just put any langugae yoy want</pre>↵<pre>node_js:</pre>↵<pre>- node</pre>↵<pre>script:</pre>↵<pre>- npm run build</pre>↵<pre>cache:</pre>↵<pre>yarn: true</pre>↵<pre>directories:</pre>↵<pre>- node_modules</pre>↵<pre>branches:</pre>↵<pre>  only:</pre>↵<pre>    - master</pre>↵<p>6. Make sure you enable these</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*y9lyVBWJ01ZXweJaYLemQw.png"></figure><p>enable the Build pushed branches and pull request</p>↵<p>7. Whenever you make any Commit to master, ci/cd pipeline will run automatically</p>↵<p>8. You can see the icon in front of pull request if it succeeds or not.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/896/1*XGhvz7AsIs_RU-RbYCg9jQ.png"></figure><p>For Continous deployment</p>↵<ol>↵<li>I have used AWS S3 bucket.</li>↵<li>Just get access key and secret key for IAM user on AWS</li>↵<li>store in env variables</li>↵</ol>↵<p>Use this for deploy to s3 and you are good to go.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/414/1*Y5mclInqLwkTBVqatgUI-g.png"></figure><blockquote><strong>Don’t want to merge the pull request if build fails ?</strong></blockquote>↵<p>Just enable the following checks from your repo settings branch section.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*_yJCw86mTmZGrKXT2xrAqQ.png"></figure><p>You are good to go now.</p>↵<p>There are a lot more things that you can do with Travis CI</p>↵<blockquote><strong>Let’s go with some of the concepts</strong></blockquote>↵<ol>↵<li>Following terms are used quite frequently in Travis ci.<br>a. Phase: There can be different phases like before install, scripts before deploy<br>b. Job: Job is something to carry a fix task<br>c. Build: build consists of multiple no. of jobs if they are an exit with zero exit code then it will be success else it will fail</li>↵<li>Its infrastructure supports two types of OS i.e Linux and MacOs.<br>Linux has 3 different versions i.e Xenial, Trusty 14.04, 12.04.<br>With dist key you can specify the version.<br>Use os key for mentioning os type. <br>The default is set to Ubuntu.</li>↵<li>It supports the only GitHub.</li>↵<li>You can deploy to multiple platforms with Travis like GitHub pages, Heroku, ruby notif etc. Check the documentation for more platforms.</li>↵<li>The build has some timeouts also. For more info read this</li>↵<li>You can limit the concurrent number of jobs</li>↵<li>If you want to run build only on latest commits not on every commit than you can select from repo settings on Travis ci. Here when builds are in the queue and some new commit pushed and their job needs to run than the previous build from the queue will be canceled.</li>↵<li>You can include and exclude branches also.</li>↵</ol>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/436/1*JOHV3Pc0rdJDtVfQUB2jBw.png"></figure><p>9. You can have a safe list and block list of branches also<br>in such cases, priority is of safelist first.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*PteXaoxlMZTXAsJ1kzNImQ.png"></figure><p>10. Just remember .travis.yml file need to be present on active branches</p>↵<p>11. You can use matrix too in the config file.<br>if you separate builds in the matrix to run things in different virtual environments. This is beneficial when you want to run different tests in parallel for example integrations tests, unit tests, snapshot testing.</p>↵<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*vDYWt-a7khY0PZWp49ugfw.png"></figure><p>12. You can run on pull requests too that will be really awesome. If PR builds failed then you can not merge.</p>↵<p><em>Hey, We have covered all the basics of CI/CD. It’s very easy. Go right now and test yourself. 🙌 👐</em></p>↵<p>It’s my first post on medium. Thanks for reading.</p>↵<p>Find me on <a href="https://www.linkedin.com/in/rahul-rana-b713499a/">Linkedin</a> <a href="https://twitter.com/rahulrana_95">Twitter</a></p>↵<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=77c6a6a4ecb8" width="1" height="1">↵"
    // enclosure: {}
    // guid: "https://medium.com/p/77c6a6a4ecb8"
    // link: "https://medium.com/@rahulrana95/ci-cd-with-travis-ci-beginner-guide-77c6a6a4ecb8?source=rss-24252af393c4------2"
    // pubDate: "2019-03-12 11:10:13"
    // thumbnail: "https://cdn-images-1.medium.com/max/1024/1*wR2_IPVSSiBU4GwtXbKg3Q.png"
    // title: "CI/CD with Travis CI — Beginner Guide"
    // __proto__: Object
    // length: 1
  }
  render() {
    return (
      <Container>
        <h3>Blogs/Articles</h3>
        {this.state.dataIsLoading ? <div>Loading ...</div> : null}
        <div className="articles">
          {this.state.mediumArticles.map(article => {
            return (
              <li>
                {" "}
                <h3>{article.title}</h3>
                <img src={article.thumbnail} width="500px" />
                <div>Published on : {article.pubDate}</div>
                <a href={article.link}>Read Article</a>
              </li>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default PersonalBlogs;
