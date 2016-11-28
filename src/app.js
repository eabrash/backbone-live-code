import $ from 'jquery';
import Backbone from 'backbone';

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon'
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

// We pass in an object to the function that contains multiple functions (initialize
// and render)

var TaskView = Backbone.View.extend({
  initialize: function(options){
    this.task = options.task;
  },
  render: function(){
    var html = "<li class=task>";
    html += "<h2>" + this.task.title + "</h2>";
    html += "<p>" + this.task.description + "</p>";
    html += "</li>";
    this.$el.html(html);

    return this;
  }
});

$(document).ready(function() {
  for (var i = 0; i < taskData.length; i++){
    var currentTask = new TaskView({task: taskData[i]});
    $('.task-list').append(currentTask.render().$el);
  }
});
