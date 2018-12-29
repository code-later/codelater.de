## -- Misc Configs -- ##

public_dir = "dist"    # compiled site directory
deploy_dir = "_deploy"   # deploy directory (for Github pages deployment)

desc "deploy public directory to github pages"
multitask :deploy do
  puts "## Deploying branch to Github Pages "

  Dir["#{public_dir}/*"].each do |file_name|
    rm_rf file_name
  end

  Dir["#{deploy_dir}/*"].each do |file_name|
    rm_rf file_name unless file_name.include? "CNAME"
  end

  puts
  puts "## copying #{public_dir} to #{deploy_dir}"

  system "npm run compile"

  cp_r "#{public_dir}/.", deploy_dir

  cd "#{deploy_dir}" do
    system "git add ."
    system "git add -u"

    puts
    puts "## Commiting: Site updated at #{Time.now.utc}"

    message = "Site updated at #{Time.now.utc}"

    system "git commit -m \"#{message}\""

    puts
    puts "## Pushing generated #{deploy_dir} website"

    system "git push origin gh-pages --force"

    puts
    puts "## Github Pages deploy complete"
  end
end
