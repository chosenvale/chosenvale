require 'closync'

task :build do
  puts `bundle exec middleman build --verbose`
end

task :sync do
  puts 'Beginning push...'
  Closync.push!
  puts 'push complete!'
end

task :deploy => [:build, :sync] do
  puts "Deployed!"
end
